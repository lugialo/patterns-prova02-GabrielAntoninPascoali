//  Bridge
class Device {
    turnOn() {}
    turnOff() {}
  }
  
  class TV extends Device {
    turnOn() {
      console.log("TV ligada.");
    }
    turnOff() {
      console.log("TV desligada.");
    }
  }
  
  class Radio extends Device {
    turnOn() {
      console.log("Radio ligado.");
    }
    turnOff() {
      console.log("Radio desligado.");
    }
  }
  
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
  }
  
  class AdvancedRemoteControl extends RemoteControl {
    mute() {
      console.log("Dispositivo mutado.");
    }
  }
  
  const tv = new TV();
  const radio = new Radio();
  
  const remoteTv = new RemoteControl(tv);
  remoteTv.pressPowerButton(true);
  remoteTv.pressPowerButton(false);
  
  const remoteRadio = new RemoteControl(radio);
  remoteRadio.pressPowerButton(true);
  remoteRadio.pressPowerButton(false);
  
  const advancedRemote = new AdvancedRemoteControl(tv);
  advancedRemote.pressPowerButton(true);
  advancedRemote.mute();