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

        createMany: procedure.input($Schema.EndpointInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).endpoint.createMany(input as any))),

        create: procedure.input($Schema.EndpointInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).endpoint.create(input as any))),

        deleteMany: procedure.input($Schema.EndpointInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).endpoint.deleteMany(input as any))),

        delete: procedure.input($Schema.EndpointInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).endpoint.delete(input as any))),

        findFirst: procedure.input($Schema.EndpointInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).endpoint.findFirst(input as any))),

        findMany: procedure.input($Schema.EndpointInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).endpoint.findMany(input as any))),

        findUnique: procedure.input($Schema.EndpointInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).endpoint.findUnique(input as any))),

        updateMany: procedure.input($Schema.EndpointInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).endpoint.updateMany(input as any))),

        update: procedure.input($Schema.EndpointInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).endpoint.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EndpointCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EndpointCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EndpointCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EndpointCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EndpointCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EndpointCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EndpointGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EndpointGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EndpointCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EndpointCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EndpointGetPayload<T>, Context>) => Promise<Prisma.EndpointGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EndpointDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EndpointDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EndpointDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EndpointDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EndpointDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EndpointDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EndpointGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EndpointGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EndpointDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EndpointDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EndpointGetPayload<T>, Context>) => Promise<Prisma.EndpointGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EndpointFindFirstArgs, TData = Prisma.EndpointGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EndpointFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EndpointGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EndpointFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EndpointFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EndpointGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EndpointGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EndpointFindManyArgs, TData = Array<Prisma.EndpointGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.EndpointFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EndpointGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EndpointFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EndpointFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EndpointGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EndpointGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EndpointFindUniqueArgs, TData = Prisma.EndpointGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EndpointFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EndpointGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EndpointFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EndpointFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EndpointGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EndpointGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EndpointUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EndpointUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EndpointUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EndpointUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EndpointUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EndpointUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EndpointGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EndpointGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EndpointUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EndpointUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EndpointGetPayload<T>, Context>) => Promise<Prisma.EndpointGetPayload<T>>
            };

    };
}
