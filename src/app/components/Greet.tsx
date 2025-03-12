import Link from "next/link";

export const Greet = () => {
  console.log("Greet Component");
  return (
    <div className="m-4 p-2 flex justify-between items-center w-full">
      <nav className="bg-white shadow-md p-4 w-full flex justify-center">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-800 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-800 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/user-client"
                className="text-gray-800 hover:text-blue-600"
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
