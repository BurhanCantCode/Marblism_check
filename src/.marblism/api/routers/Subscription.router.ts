/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.SubscriptionInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscription.createMany(input as any))),

        create: procedure.input($Schema.SubscriptionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscription.create(input as any))),

        deleteMany: procedure.input($Schema.SubscriptionInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscription.deleteMany(input as any))),

        delete: procedure.input($Schema.SubscriptionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscription.delete(input as any))),

        findFirst: procedure.input($Schema.SubscriptionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).subscription.findFirst(input as any))),

        findMany: procedure.input($Schema.SubscriptionInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).subscription.findMany(input as any))),

        findUnique: procedure.input($Schema.SubscriptionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).subscription.findUnique(input as any))),

        updateMany: procedure.input($Schema.SubscriptionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscription.updateMany(input as any))),

        update: procedure.input($Schema.SubscriptionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscription.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SubscriptionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SubscriptionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubscriptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubscriptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubscriptionGetPayload<T>, Context>) => Promise<Prisma.SubscriptionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SubscriptionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SubscriptionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubscriptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubscriptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubscriptionGetPayload<T>, Context>) => Promise<Prisma.SubscriptionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SubscriptionFindFirstArgs, TData = Prisma.SubscriptionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SubscriptionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SubscriptionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubscriptionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubscriptionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SubscriptionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SubscriptionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SubscriptionFindManyArgs, TData = Array<Prisma.SubscriptionGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SubscriptionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SubscriptionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubscriptionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubscriptionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SubscriptionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SubscriptionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SubscriptionFindUniqueArgs, TData = Prisma.SubscriptionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SubscriptionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SubscriptionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubscriptionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubscriptionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SubscriptionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SubscriptionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SubscriptionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SubscriptionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubscriptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubscriptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubscriptionGetPayload<T>, Context>) => Promise<Prisma.SubscriptionGetPayload<T>>
            };

    };
}
