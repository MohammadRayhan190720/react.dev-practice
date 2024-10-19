
import '../styles/profile.css'

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <div>
      <h2>{user.name}</h2>
      <img className='avatar' src={user.imageUrl} alt=""  />
    </div>
  );
}
