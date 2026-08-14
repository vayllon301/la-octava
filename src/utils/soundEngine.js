// Dual Web Audio API soundscape generator: Velvet Jazz Lounge & Sub-Vault Deep House
class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.mode = 'jazz'; // 'jazz' or 'house'
    this.gainNode = null;
    this.oscillators = [];
    this.intervalId = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
  }

  setMode(newMode) {
    if (this.mode === newMode) return;
    this.mode = newMode;
    if (this.isPlaying) {
      this.stop();
      setTimeout(() => this.play(), 200);
    }
  }

  toggle(targetMode = null) {
    this.init();
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (targetMode && targetMode !== this.mode) {
      this.mode = targetMode;
      if (!this.isPlaying) {
        this.play();
        return true;
      } else {
        this.stop();
        setTimeout(() => this.play(), 200);
        return true;
      }
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

    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.12, this.audioCtx.currentTime + 1.5);
    this.gainNode.connect(this.audioCtx.destination);

    if (this.mode === 'jazz') {
      this.playJazzChords();
    } else {
      this.playHouseGroove();
    }

    this.isPlaying = true;
  }

  playJazzChords() {
    // Warm jazz minor 9th chord (F - Ab - C - Eb - G)
    const freqs = [87.31, 103.83, 130.81, 155.56, 196.00];

    this.oscillators = freqs.map((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const filter = this.audioCtx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(480 + idx * 70, this.audioCtx.currentTime);

      osc.connect(filter);
      filter.connect(this.gainNode);
      osc.start();
      return osc;
    });
  }

  playHouseGroove() {
    // Deep House Sub Bass (45Hz - 90Hz) & Warm Chords
    const bassOsc = this.audioCtx.createOscillator();
    const filter = this.audioCtx.createBiquadFilter();
    
    bassOsc.type = 'sine';
    bassOsc.frequency.setValueAtTime(55, this.audioCtx.currentTime); // A1 note
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(160, this.audioCtx.currentTime);

    bassOsc.connect(filter);
    filter.connect(this.gainNode);
    bassOsc.start();
    this.oscillators.push(bassOsc);

    // Warm deep house chord stabs (A minor 7)
    const chordFreqs = [110, 130.81, 164.81, 196.00];
    chordFreqs.forEach((freq) => {
      const osc = this.audioCtx.createOscillator();
      const chordFilter = this.audioCtx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      chordFilter.type = 'lowpass';
      chordFilter.frequency.setValueAtTime(380, this.audioCtx.currentTime);

      osc.connect(chordFilter);
      chordFilter.connect(this.gainNode);
      osc.start();
      this.oscillators.push(osc);
    });
  }

  stop() {
    if (!this.isPlaying || !this.gainNode) return;
    const now = this.audioCtx.currentTime;
    this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now);
    this.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 800);
  }
}

export const soundEngine = new SoundEngine();
