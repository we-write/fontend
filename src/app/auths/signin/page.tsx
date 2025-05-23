'use client';
import Button from '@/components/common/Button/Button';
import InputForm from '@/components/common/Form/InputForm';

import { VisibilityOff, VisibilityOn } from '@public/assets/icons';
import { usePostSignin } from '@/hooks/api/users/usePostSignin';
import { SigninRequest } from '@/types/user';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useBoolean from '@/hooks/useBoolean';

const Page = () => {
  const { value: isShowPassword, toggle: toggleIsShowPassword } = useBoolean();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<SigninRequest>();
  const { mutate: signIn } = usePostSignin();
  const onSubmit: SubmitHandler<SigninRequest> = (data) => {
    signIn(data, {
      onSuccess: () => {
        router.push('/social');
      },
      onError: (error: Error) => {
        if (error.message === '존재하지 않는 아이디입니다') {
          setError('email', {
            type: 'manual',
            message: error.message,
          });
        }
        if (error.message === '비밀번호가 아이디와 일치하지 않습니다') {
          setError('password', {
            type: 'manual',
            message: error.message,
          });
        }
      },
    });
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex max-h-[478px] w-[343px] flex-col gap-10 rounded-3xl bg-white px-4 py-6 sm:px-1 md:w-[608px] md:px-13.5 lg:max-h-[478px] lg:w-[508px]">
        <h1 className="text-write-main text-center text-xl font-bold">
          로그인
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <InputForm
              label="아이디"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요."
              register={{
                ...register('email', { required: '이메일을 입력해주세요.' }),
              }}
              helperText={errors.email?.message}
              hasError={!!errors.email}
            />
          </div>
          <div>
            <InputForm
              label="비밀번호"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              register={{
                ...register('password', {
                  required: '비밀번호를 입력해주세요.',
                }),
              }}
              hasError={!!errors.password}
              helperText={errors.password?.message}
              suffixIcon={
                <button
                  type="button"
                  className="flex items-center justify-center"
                  onClick={toggleIsShowPassword}
                >
                  {isShowPassword ? (
                    <VisibilityOn
                      aria-label="show password"
                      fill="currentColor"
                    />
                  ) : (
                    <VisibilityOff
                      aria-label="hide password"
                      fill="currentColor"
                    />
                  )}
                </button>
              }
              type={isShowPassword ? 'text' : 'password'}
            />
          </div>
          <Button
            role="button"
            type="submit"
            color="custom"
            disabled={isSubmitting || !!errors.email || !!errors.password}
            className={`${errors.email || errors.password ? 'bg-gray-400' : 'bg-write-main'} font-bold text-white`}
          >
            로그인
          </Button>
        </form>
        <div className="flex items-center justify-center gap-2">
          <span>WE WRITE가 처음이신가요?</span>
          <Link
            href="/auths/signup"
            className="text-write-main font-semibold underline"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
