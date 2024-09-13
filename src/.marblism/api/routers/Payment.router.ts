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

        createMany: procedure.input($Schema.PaymentInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).payment.createMany(input as any))),

        create: procedure.input($Schema.PaymentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).payment.create(input as any))),

        deleteMany: procedure.input($Schema.PaymentInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).payment.deleteMany(input as any))),

        delete: procedure.input($Schema.PaymentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).payment.delete(input as any))),

        findFirst: procedure.input($Schema.PaymentInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).payment.findFirst(input as any))),

        findMany: procedure.input($Schema.PaymentInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).payment.findMany(input as any))),

        findUnique: procedure.input($Schema.PaymentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).payment.findUnique(input as any))),

        updateMany: procedure.input($Schema.PaymentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).payment.updateMany(input as any))),

        update: procedure.input($Schema.PaymentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).payment.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PaymentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PaymentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentGetPayload<T>, Context>) => Promise<Prisma.PaymentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PaymentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PaymentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentGetPayload<T>, Context>) => Promise<Prisma.PaymentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PaymentFindFirstArgs, TData = Prisma.PaymentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PaymentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PaymentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaymentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PaymentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PaymentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PaymentFindManyArgs, TData = Array<Prisma.PaymentGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PaymentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PaymentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaymentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PaymentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PaymentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PaymentFindUniqueArgs, TData = Prisma.PaymentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PaymentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PaymentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaymentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PaymentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PaymentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PaymentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PaymentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentGetPayload<T>, Context>) => Promise<Prisma.PaymentGetPayload<T>>
            };

    };
}
