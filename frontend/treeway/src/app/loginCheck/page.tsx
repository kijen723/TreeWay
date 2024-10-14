'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { logIn } from '@/redux/slice/authSlice';

export default function LoginCheck() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const userDetails = getCookie('customUserDetails');

    if (userDetails) {
      const { id, name, email } = JSON.parse(userDetails as string);

      dispatch(logIn({
        memberId: id,
        username: name,
        email,
      }));

      router.push('/main');
    } else {
      alert('로그인 정보가 없습니다. 로그인 페이지로 이동합니다.');
      router.push('/login');
    }
  }, [router, dispatch]);

  return (
    <div>
      Check User Info ...
    </div>
  );
}
