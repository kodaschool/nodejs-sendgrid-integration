const betterLogColors = {
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m",

  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
  bgGray: "\x1b[100m",
};

export class LoggerService {
  static logInfo(data: any) {
    console.info(
      `${new Date().toISOString()} : ${LoggerService.parseToString(data)}`
    );
  }

  static logError(data: any) {
    console.error(
      `${new Date().toISOString()} : ${
        betterLogColors.red
      } ${LoggerService.parseToString(data)}`
    );
  }

  static parseToString(value: any): string {
    const stringly = Object.keys(value).length ? JSON.stringify(value) : value;
    return value;
  }
}
