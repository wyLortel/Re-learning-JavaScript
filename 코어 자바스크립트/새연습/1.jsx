function MyButton({ onPress }) {
  return <button onClick={onPress}>눌러줘</button>;
}

function App() {
  const handlePress = () => console.log("눌렸다");
  return <MyButton onPress={handlePress} />;
}