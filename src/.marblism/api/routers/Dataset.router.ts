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

        createMany: procedure.input($Schema.DatasetInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dataset.createMany(input as any))),

        create: procedure.input($Schema.DatasetInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dataset.create(input as any))),

        deleteMany: procedure.input($Schema.DatasetInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dataset.deleteMany(input as any))),

        delete: procedure.input($Schema.DatasetInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dataset.delete(input as any))),

        findFirst: procedure.input($Schema.DatasetInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).dataset.findFirst(input as any))),

        findMany: procedure.input($Schema.DatasetInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).dataset.findMany(input as any))),

        findUnique: procedure.input($Schema.DatasetInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).dataset.findUnique(input as any))),

        updateMany: procedure.input($Schema.DatasetInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dataset.updateMany(input as any))),

        update: procedure.input($Schema.DatasetInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dataset.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.DatasetCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DatasetCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DatasetCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DatasetCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.DatasetCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DatasetCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DatasetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DatasetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DatasetCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DatasetCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DatasetGetPayload<T>, Context>) => Promise<Prisma.DatasetGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.DatasetDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DatasetDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DatasetDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DatasetDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.DatasetDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DatasetDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DatasetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DatasetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DatasetDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DatasetDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DatasetGetPayload<T>, Context>) => Promise<Prisma.DatasetGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.DatasetFindFirstArgs, TData = Prisma.DatasetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DatasetFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DatasetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DatasetFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DatasetFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DatasetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DatasetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.DatasetFindManyArgs, TData = Array<Prisma.DatasetGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.DatasetFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.DatasetGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DatasetFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DatasetFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.DatasetGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.DatasetGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.DatasetFindUniqueArgs, TData = Prisma.DatasetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DatasetFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DatasetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DatasetFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DatasetFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DatasetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DatasetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.DatasetUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DatasetUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DatasetUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DatasetUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.DatasetUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DatasetUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DatasetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DatasetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DatasetUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DatasetUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DatasetGetPayload<T>, Context>) => Promise<Prisma.DatasetGetPayload<T>>
            };

    };
}
