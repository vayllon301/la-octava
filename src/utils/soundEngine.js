// Web Audio API ambient lounge soundscape generator (no external files needed)
class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.gainNode = null;
    this.oscillators = [];
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
  }

  toggle() {
    this.init();
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  play() {
    if (this.isPlaying) return;
    this.init();

    // Master volume gain
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.12, this.audioCtx.currentTime + 3);
    this.gainNode.connect(this.audioCtx.destination);

    // Warm deep ambient chords (Root: C2, G2, Eb3, Bb3 - Velvet Minor 7th chord)
    const frequencies = [65.41, 98.00, 155.56, 233.08, 311.13];

    this.oscillators = frequencies.map((freq, index) => {
      const osc = this.audioCtx.createOscillator();
      const panner = this.audioCtx.createStereoPanner ? this.audioCtx.createStereoPanner() : null;
      const filter = this.audioCtx.createBiquadFilter();

      osc.type = index % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      // Low-pass filter for cozy velvet warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + index * 80, this.audioCtx.currentTime);

      if (panner) {
        panner.pan.setValueAtTime((index % 2 === 0 ? -0.4 : 0.4), this.audioCtx.currentTime);
        osc.connect(filter);
        filter.connect(panner);
        panner.connect(this.gainNode);
      } else {
        osc.connect(filter);
        filter.connect(this.gainNode);
      }

      osc.start();
      return osc;
    });

    this.isPlaying = true;
  }

  stop() {
    if (!this.isPlaying || !this.gainNode) return;
    const now = this.audioCtx.currentTime;
    this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now);
    this.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1500);
  }
}

export const soundEngine = new SoundEngine();
