import { useState } from "react";

/**
 * Admin wrapper that should be protect any page wrapped with Admin wrapper, which a user should have/has admin permissions.
 * Usage:
 * <Admin>
 *    <PageComponent />
 * </Admin>
 */
type ComponentProps = {
  children: JSX.Element;
};
export default function Admin({ children }: ComponentProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setAdmin] = useState(false);


  if (!loading && !isAdmin) {
    return (
      <h4 className="text-center mt-5">you don't have permission to access</h4>
    );
  }
  return !loading ? <div>{children}</div> : <div></div>;
}
