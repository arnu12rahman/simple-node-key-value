"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../constants");
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
let LoggingService = class LoggingService {
    constructor() {
        const dailyRotateFileTransport = new DailyRotateFile({
            filename: `logs/TEST-PERTAMA-%DATE%.log`,
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        });
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(winston.format.timestamp(), winston.format.printf((info) => {
                const { timestamp, message, context } = info;
                const source = context ? `| ${context}` : '';
                return `${timestamp} | ${constants_1.APP_NAME} ${source} | ${message}`;
            })),
            transports: [dailyRotateFileTransport],
        });
    }
    log(message, context) {
        this.logger.info(message, { context });
    }
};
exports.LoggingService = LoggingService;
exports.LoggingService = LoggingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggingService);
//# sourceMappingURL=logger.service.js.map