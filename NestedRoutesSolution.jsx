To fix this, ensure that each parent route component that needs to pass parameters down has an `<Outlet />` component in its JSX. The `<Outlet />` acts as a placeholder where the nested route components will render.  For example, if you have a route structure like this:

```jsx
<Route path="/users/:userId/profile" element={<UserProfile />}>
```

And `UserProfile` needs access to `userId`, it must be nested within a parent route that uses `<Outlet />` to pass the parameters down. For example, this would correctly pass the userId.

```jsx
function ParentRoute() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function UserProfile() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User Profile: {userId}</h1>
    </div>
  );
}

<Route path="/users/:userId" element={<ParentRoute/>}>
  <Route path="profile" element={<UserProfile />} />
</Route>
```

By adding `<Outlet />` in the correct parent routes, the `useParams` hook in the deeply nested components will correctly resolve and return the expected parameters.