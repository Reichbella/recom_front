import { useState } from "react";
import axios from "axios";

function Movies() {
  const [genre, setGenre] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Children's",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Film-Noir",
    "Horror",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
    "Western",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!genre) {
      setError("Veuillez sélectionner un genre.");
      return;
    }
    setLoading(true);
    setError("");
    setRecommendations([]);

    try {
      const response = await axios.post("http://localhost:5000/recommend", {
        genre,
      });
      if (response.data.error) {
        setError(response.data.error);
      } else {
        setRecommendations(response.data.recommendations);
      }
    } catch (err) {
      setError(
        "Erreur lors de la récupération des recommandations. Vérifiez que le serveur est en cours d’exécution."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col items-center justify-center p-4">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg animate-pulse">
          Recommandations de Films
        </h1>
      </header>

      <main className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl p-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 mb-6"
        >
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="flex-1 p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>
              Choisissez un genre
            </option>
            {genres.map((g) => (
              <option key={g} value={g} className="text-black">
                {g}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Chargement..." : "Obtenir Recommandations"}
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-center mb-4 animate-fade-in">
            {error}
          </p>
        )}

        {recommendations.length > 0 && (
          <div className="grid gap-4">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="p-4 bg-white bg-opacity-20 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 animate-fade-in"
              >
                <h3 className="text-lg font-semibold text-white">
                  {rec.title}
                </h3>
                <p className="text-gray-300">Score prédit : {rec.score}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Movies;
