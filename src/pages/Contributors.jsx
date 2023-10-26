
const Contributors = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-8">
      <h2 className="text-4xl font-bold mb-8">Contributors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div key="1" className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">heeeee</h3>
          <p className="text-sm mb-2">@heeeeee</p>
          <p className="text-sm">2 contributions</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contributors