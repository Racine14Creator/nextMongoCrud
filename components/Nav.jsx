
"use client";

import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Nav(){
    const { isAuthenticated } = useKindeBrowserClient();

  return isAuthenticated ? (
    <div>Admin content</div>
  ) : (
    <div>
      You have to <LoginLink>Login</LoginLink> to see this page
    </div>
  );
}