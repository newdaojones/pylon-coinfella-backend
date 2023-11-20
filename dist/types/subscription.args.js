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
exports.SubscriptionArgs = void 0;
const graphql_type_json_1 = require("graphql-type-json");
const type_graphql_1 = require("type-graphql");
let SubscriptionArgs = class SubscriptionArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SubscriptionArgs.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SubscriptionArgs.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SubscriptionArgs.prototype, "action", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => graphql_type_json_1.GraphQLJSONObject),
    __metadata("design:type", Object)
], SubscriptionArgs.prototype, "payload", void 0);
SubscriptionArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], SubscriptionArgs);
exports.SubscriptionArgs = SubscriptionArgs;
//# sourceMappingURL=subscription.args.js.map