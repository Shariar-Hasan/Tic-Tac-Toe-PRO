import { useState, useEffect } from 'react';

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Shariar-Hasan/Tic-Tac-Toe-PRO/contributors');
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchContributors();
  }, []);
  return (
    <div className="container mx-auto bg-back text-site p-4">
      <h2 className="text-4xl font-bold mb-8">Contributors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          contributors.map((cont, i) =>
            <div key={i} className="bg-front p-4 rounded-lg grid md:grid-cols-3 grid-cols-1">
              <div className="col-span-1">
                <img className="rounded-full" src={cont.avatar_url} alt={cont.login} />
              </div>
              <div className="col-span-2 text-right">
                <h3 className="text-xl font-bold mb-2">{cont.login}</h3>
                <p className="text-sm mb-2">@{cont.login} </p>
                <p className="text-sm">{cont.contributions} contributions</p>
                <a
                  href={cont.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  View Profile
                </a>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default Contributors