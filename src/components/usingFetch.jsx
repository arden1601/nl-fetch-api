export default function FetchProps({ data }) {
    
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{data.message}</h1>
        <p className="text-gray-500">This is a simple fetch example.</p>
      </div>
    </div>
  );
}