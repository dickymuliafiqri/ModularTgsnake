/**
 * by dickymuliafiqri
 *
 * Initialize telegraph account, and etc
 */

import { helpList } from "./help";

const Telegraph = require("telegraph-node");

// https://stackoverflow.com/a/1349426
function makeid(length: number): string {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export class PH {
  name: string;
  helpUrl: string | undefined;

  private token: string | undefined;
  private ph: any;

  constructor() {
    this.name = makeid(12);
    this.ph = new Telegraph();
  }

  async createAccount() {
    const acc = await this.ph.createAccount("hi", {
      short_name: this.name,
      author_name: "Anonymous",
    });

    this.token = acc.access_token;
  }

  async createHelp() {
    let helpNodeElements: any = [];

    helpList.forEach((help) => {
      const helpNode = [
        {
          tag: "h4",
          children: [help.command],
        },
        {
          tag: "p",
          children: [help.desc],
        },
      ];

      helpNodeElements.push(...helpNode);
    });

    const helpPage = await this.ph.createPage(this.token, "Tgsnake Help Command", [...helpNodeElements]);
    this.helpUrl = helpPage.url;
  }
}
