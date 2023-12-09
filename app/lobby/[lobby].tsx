import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ListRenderItemInfo } from 'react-native';

type Player = {
  id: string;
  name: string;
  score: number;
};

const players: Player[] = [
  { id: '1', name: 'Justin', score: 0 },
  { id: '2', name: 'Alfred', score: 0 },
  // ... other players
];

export default function GameLobby() {
  const renderPlayer = ({ item }: ListRenderItemInfo<Player>) => (
    <View style={styles.playerContainer}>
      <Image
        style={styles.avatar}
        source={require('./../../assets/images/icon.png')}
      />
      <Text style={styles.playerName}>{item.name}</Text>
      <Text style={styles.playerScore}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={renderPlayer}
        keyExtractor={(item) => item.id}
        style={styles.playerList}
      />
      <Text style={styles.roundsPlayed}>Rounds Played: 0</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start a Round</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
        <Text style={styles.buttonText}>Leave Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  playerList: {
    flex: 1,
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerName: {
    flex: 1,
    fontSize: 18,
  },
  playerScore: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  roundsPlayed: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonOutline: {
    backgroundColor: '#fff',
    borderColor: '#6200ee',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#6200ee',
  },
});
