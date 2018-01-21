import { Injectable } from '@angular/core';

import { ApiAiClient } from 'api-ai-javascript';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class Message {
  constructor(public content: string, public sentBy: string) {}
}
export class ChatService {
  readonly client = new ApiAiClient({ accessToken: 'e824aea6927e451482ffe95252890b29'  });


  
  conversation = new BehaviorSubject<Message[]>([]);
  constructor() { }
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    return this.client.textRequest(msg)
               .then(res => {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
               });
  }
  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }
}
