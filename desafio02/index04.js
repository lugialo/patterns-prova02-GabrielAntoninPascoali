// Decorator
class Message {
    constructor(text) {
      this.text = text;
    }
  
    getText() {
      return this.text;
    }
  }
  
  class MessageDecorator extends Message {
    constructor(message) {
      super("");
      this.message = message;
    }
  
    getText() {
      return this.message.getText();
    }
  }
  
  class UpperCaseDecorator extends MessageDecorator {
    getText() {
      return this.message.getText().toUpperCase();
    }
  }
  
  class EmojiDecorator extends MessageDecorator {
    getText() {
      return `😊 ${this.message.getText()} 😊`;
    }
  }
  
  class EncryptDecorator extends MessageDecorator {
    getText() {
      return this.message.getText()
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');
    }
  }
  
  class TimestampDecorator extends MessageDecorator {
    getText() {
      const timestamp = new Date().toLocaleTimeString();
      return `[${timestamp}] ${this.message.getText()}`;
    }
  }
  
  const msg = new Message("hoje o dia está horrível");
  console.log(msg.getText());
  
  const msgWithEmoji = new EmojiDecorator(msg);
  console.log(msgWithEmoji.getText());
  
  const msgUpperCase = new UpperCaseDecorator(msg);
  console.log(msgUpperCase.getText());
  
  const msgDecorated = new TimestampDecorator(
    new UpperCaseDecorator(
      new EmojiDecorator(msg)
    )
  );
  console.log(msgDecorated.getText());
  
  const msgEncrypted = new EncryptDecorator(msg);
  console.log(msgEncrypted.getText());