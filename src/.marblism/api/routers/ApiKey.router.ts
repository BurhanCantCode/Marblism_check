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

        createMany: procedure.input($Schema.ApiKeyInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).apiKey.createMany(input as any))),

        create: procedure.input($Schema.ApiKeyInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).apiKey.create(input as any))),

        deleteMany: procedure.input($Schema.ApiKeyInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).apiKey.deleteMany(input as any))),

        delete: procedure.input($Schema.ApiKeyInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).apiKey.delete(input as any))),

        findFirst: procedure.input($Schema.ApiKeyInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).apiKey.findFirst(input as any))),

        findMany: procedure.input($Schema.ApiKeyInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).apiKey.findMany(input as any))),

        findUnique: procedure.input($Schema.ApiKeyInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).apiKey.findUnique(input as any))),

        updateMany: procedure.input($Schema.ApiKeyInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).apiKey.updateMany(input as any))),

        update: procedure.input($Schema.ApiKeyInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).apiKey.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ApiKeyCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ApiKeyCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ApiKeyCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ApiKeyCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ApiKeyCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ApiKeyCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ApiKeyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ApiKeyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ApiKeyCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ApiKeyCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ApiKeyGetPayload<T>, Context>) => Promise<Prisma.ApiKeyGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ApiKeyDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ApiKeyDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ApiKeyDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ApiKeyDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ApiKeyDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ApiKeyDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ApiKeyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ApiKeyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ApiKeyDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ApiKeyDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ApiKeyGetPayload<T>, Context>) => Promise<Prisma.ApiKeyGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ApiKeyFindFirstArgs, TData = Prisma.ApiKeyGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ApiKeyFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ApiKeyGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ApiKeyFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ApiKeyFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ApiKeyGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ApiKeyGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ApiKeyFindManyArgs, TData = Array<Prisma.ApiKeyGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ApiKeyFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ApiKeyGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ApiKeyFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ApiKeyFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ApiKeyGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ApiKeyGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ApiKeyFindUniqueArgs, TData = Prisma.ApiKeyGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ApiKeyFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ApiKeyGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ApiKeyFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ApiKeyFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ApiKeyGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ApiKeyGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ApiKeyUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ApiKeyUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ApiKeyUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ApiKeyUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ApiKeyUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ApiKeyUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ApiKeyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ApiKeyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ApiKeyUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ApiKeyUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ApiKeyGetPayload<T>, Context>) => Promise<Prisma.ApiKeyGetPayload<T>>
            };

    };
}
