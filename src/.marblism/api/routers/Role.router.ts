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

        createMany: procedure.input($Schema.RoleInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.createMany(input as any))),

        create: procedure.input($Schema.RoleInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.create(input as any))),

        deleteMany: procedure.input($Schema.RoleInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.deleteMany(input as any))),

        delete: procedure.input($Schema.RoleInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.delete(input as any))),

        findFirst: procedure.input($Schema.RoleInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).role.findFirst(input as any))),

        findMany: procedure.input($Schema.RoleInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).role.findMany(input as any))),

        findUnique: procedure.input($Schema.RoleInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).role.findUnique(input as any))),

        updateMany: procedure.input($Schema.RoleInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.updateMany(input as any))),

        update: procedure.input($Schema.RoleInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).role.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RoleCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RoleCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RoleCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RoleCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RoleCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RoleCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RoleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RoleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RoleCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RoleCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RoleGetPayload<T>, Context>) => Promise<Prisma.RoleGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RoleDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RoleDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RoleDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RoleDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RoleDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RoleDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RoleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RoleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RoleDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RoleDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RoleGetPayload<T>, Context>) => Promise<Prisma.RoleGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RoleFindFirstArgs, TData = Prisma.RoleGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RoleFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RoleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RoleFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RoleFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RoleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RoleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RoleFindManyArgs, TData = Array<Prisma.RoleGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.RoleFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RoleGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RoleFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RoleFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RoleGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RoleGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RoleFindUniqueArgs, TData = Prisma.RoleGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RoleFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RoleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RoleFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RoleFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RoleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RoleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RoleUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RoleUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RoleUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RoleUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RoleUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RoleUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RoleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RoleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RoleUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RoleUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RoleGetPayload<T>, Context>) => Promise<Prisma.RoleGetPayload<T>>
            };

    };
}
