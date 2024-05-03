import Navbar from "./components/Navbar"
import MovieCard from "./components/MovieCard"
const App = () => {
  return (
    <div>
      <Navbar />
      <main className="p-3">
        <div className="row">
          <div className="col-4">
            <MovieCard title="Ghilli - (2004)" image="https://assets-in.bmscdn.com/discovery-catalog/events/et00000976-mcbzcuvucn-landscape.jpg" desc="Velu, an aspiring Kabaddi player, is in Madurai to participate in one of the regional matches when he rescues Dhanalakshmi from Muthupandi, a powerful man keen on marrying the girl against her wishes." />
          </div>
          <div className="col-4">
            <MovieCard title="Remo - (2016)" image="https://d2h7z5r5pp4sed.cloudfront.net/tamil/news/remo-firstlook23616-m.jpg" desc="SK, an aspiring actor, falls in love with Kavya, a doctor. However, she is engaged to another man and SK tries to sabotage their relationship by making her fall for him." />
          </div>
          <div className="col-4">
            <MovieCard title="Mankatha - (2011)" image="https://m.media-amazon.com/images/M/MV5BZjEwYjkxZGEtMjZlMy00MDZhLTk0MWYtNDY0NTZiNmZkM2Q4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg" desc="Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot." />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App