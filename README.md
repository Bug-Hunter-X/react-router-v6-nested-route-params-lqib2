This repository demonstrates a common bug in React Router v6 involving the `useParams` hook within deeply nested routes.  The bug occurs when parent routes lack the necessary `<Outlet />` components to propagate parameters down to nested components. The solution involves adding `<Outlet />` components to the parent routes to ensure correct parameter resolution.