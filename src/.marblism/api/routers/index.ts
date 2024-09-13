/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createOrganizationRouter from "./Organization.router";
import createDatasetRouter from "./Dataset.router";
import createEndpointRouter from "./Endpoint.router";
import createSubscriptionRouter from "./Subscription.router";
import createPaymentRouter from "./Payment.router";
import createApiKeyRouter from "./ApiKey.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as DatasetClientType } from "./Dataset.router";
import { ClientType as EndpointClientType } from "./Endpoint.router";
import { ClientType as SubscriptionClientType } from "./Subscription.router";
import { ClientType as PaymentClientType } from "./Payment.router";
import { ClientType as ApiKeyClientType } from "./ApiKey.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        dataset: createDatasetRouter(router, procedure),
        endpoint: createEndpointRouter(router, procedure),
        subscription: createSubscriptionRouter(router, procedure),
        payment: createPaymentRouter(router, procedure),
        apiKey: createApiKeyRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    dataset: DatasetClientType<AppRouter>;
    endpoint: EndpointClientType<AppRouter>;
    subscription: SubscriptionClientType<AppRouter>;
    payment: PaymentClientType<AppRouter>;
    apiKey: ApiKeyClientType<AppRouter>;
}
