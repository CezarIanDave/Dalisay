
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const posts = [
  {
    id: '1',
    name: 'Cezar Ian Dave O. Dalisya',
    username: '@cezar',
    time: '2h',
    avatar: 'https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/817391317_2410875649320276_6984919221040350803_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=PmHd4wB2NicQ7kNvwGD3xnr&_nc_oc=Adr06ug17WD-rreBSUxzONpJO8jtuxo80lwOXUxxwklFOuw-QW9Jcc95reUHwbG_FhI&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=ODxmIUHHnRBnjU17vWTtFA&_nc_ss=7b2a8&oh=00_AQS7QTNJVzhGGuMbYQqqqVt3WsovtDmEIYU3NWRjqVwqSA&oe=6B01A372',
    text: 'The best way to predict the future is to create it. Keep learning and keep building! 🚀',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900',
    comments: '24',
    reposts: '120',
    likes: '1.2K',
  },
  {
    id: '2',
    name: 'Ralph Makabatok',
    username: '@ralphmakabatok',
    time: '4h',
    avatar: 'https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.6435-9/144950757_207564211072984_4273909824669001676_n.jpg?stp=dst-jpg_tt6&cstp=mx1800x1808&ctp=s1800x1808&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=NKo-BoPjnl0Q7kNvwFbndQy&_nc_oc=Ado3AdmqKCnYam9U-nTuBybxCPfrsjyETyynR4Grc53t8D-5Y4V4M1rM8QTmOnDL9yU&_nc_zt=23&_nc_ht=scontent.fdvo1-1.fna&_nc_gid=A3kj-AJ-r8n1b7BpHQOSCw&_nc_ss=7b2a8&oh=00_AQS33kXOQL6pBUmKGvELgh1BXV_guaThksUDQ4JBTXrNpQ&oe=6B235143',
    text: 'Beautiful moments remind us to slow down and appreciate life. 🌅',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
    comments: '18',
    reposts: '45',
    likes: '890',
  },
  {
    id: '3',
    name: 'kyle Lee',
    username: '@ky lee',
    time: '6h',
    avatar: 'https://scontent.fdvo1-2.fna.fbcdn.net/v/t39.30808-6/469715538_882471457290675_9036267457229506430_n.jpg?stp=dst-jpg_tt6&cstp=mx540x541&ctp=s540x541&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=6nWka50-M0IQ7kNvwGZecMD&_nc_oc=Adq0Oj4k0gjvuuY-ADDHEVSxk9qyiLoQg9ntIS-2bE-dQV8rM8Ml0L0hbogVhxjXoYs&_nc_zt=23&_nc_ht=scontent.fdvo1-2.fna&_nc_gid=tNAety-yvbc2Fnq_x1y_aw&_nc_ss=7b2a8&oh=00_AQS5H58OouL3P80WvnUDdEGFo1ebfBkKcTsfW92KJABgdw&oe=6B01B682',
    text: 'Working on something exciting. Stay tuned! 💻',
    image: '',
    comments: '12',
    reposts: '32',
    likes: '456',
  },
  {
    id: '4',
    name: 'geilurdtapay',
    username: '@geilurdtapay',
    time: '8h',
    avatar: 'https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/272843652_679974676339432_1250203720611008898_n.jpg?stp=dst-jpg_tt6&cstp=mx720x720&ctp=s720x720&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=72G-AkK3GXQQ7kNvwGc-3Dx&_nc_oc=AdoPhB7eR82IKJf0UA33y35hhZ93UTcfcwjum2rJkiE9zKbVWJOod1P5OIvLzKUvTVg&_nc_zt=23&_nc_ht=scontent.fdvo1-1.fna&_nc_gid=1YBXc6NjxQSsc6754Zl8hg&_nc_ss=7b2a8&oh=00_AQSYd6IvaiZFranVjKtLVjKxwS5L1dnpT-c1oyhmxdjTvw&oe=6B01A01D',
    text: 'Never stop dreaming. Every small step brings you closer to your goals. ✨',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900',
    comments: '32',
    reposts: '65',
    likes: '2.1K',
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/817391317_2410875649320276_6984919221040350803_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=PmHd4wB2NicQ7kNvwGD3xnr&_nc_oc=Adr06ug17WD-rreBSUxzONpJO8jtuxo80lwOXUxxwklFOuw-QW9Jcc95reUHwbG_FhI&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=ODxmIUHHnRBnjU17vWTtFA&_nc_ss=7b2a8&oh=00_AQS7QTNJVzhGGuMbYQqqqVt3WsovtDmEIYU3NWRjqVwqSA&oe=6B01A372' }}
          style={styles.headerAvatar}
        />

        <Text style={styles.logo}>𝕏</Text>

        <Text style={styles.sparkle}>✦</Text>
      </View>

      {/* Feed Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.activeTabText}>For you</Text>
          <View style={styles.activeLine} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Following</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Create Post */}
        <View style={styles.composer}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.composerText}>
              What's happening?
            </Text>

            <View style={styles.composerBottom}>
              <Text style={styles.blueIcons}>▧   ◎   ☺</Text>

              <TouchableOpacity style={styles.postButton}>
                <Text style={styles.postButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Posts */}
        {posts.map((post) => (
          <View style={styles.post} key={post.id}>
            <Image
              source={{ uri: post.avatar }}
              style={styles.avatar}
            />

            <View style={styles.postContent}>
              <View style={styles.postHeader}>
                <Text style={styles.name}>{post.name}</Text>
                <Text style={styles.verified}>✓</Text>
                <Text style={styles.username}>
                  {post.username} · {post.time}
                </Text>
                <Text style={styles.more}>•••</Text>
              </View>

              <Text style={styles.postText}>
                {post.text}
              </Text>

              {post.image !== '' && (
                <Image
                  source={{ uri: post.image }}
                  style={styles.postImage}
                  resizeMode="cover"
                />
              )}

              <View style={styles.actions}>
                <Text style={styles.action}>♡ {post.comments}</Text>
                <Text style={styles.action}>⇄ {post.reposts}</Text>
                <Text style={styles.action}>♡ {post.likes}</Text>
                <Text style={styles.action}>↗</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Compose Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2F3336',
  },
  headerAvatar: {
    width: 34,
    height: 34,
    borderRadius: 20,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  sparkle: {
    color: '#1D9BF0',
    fontSize: 25,
  },
  tabs: {
    height: 55,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#2F3336',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tabText: {
    color: '#71767B',
    fontSize: 15,
  },
  activeLine: {
    position: 'absolute',
    bottom: 0,
    width: 90,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#1D9BF0',
  },
  composer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2F3336',
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 25,
    backgroundColor: '#333639',
  },
  composerText: {
    color: '#71767B',
    fontSize: 17,
    marginTop: 10,
  },
  composerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
  },
  blueIcons: {
    color: '#1D9BF0',
    fontSize: 19,
  },
  postButton: {
    backgroundColor: '#1D9BF0',
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 25,
  },
  postButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  post: {
    flexDirection: 'row',
    padding: 15,
    gap: 11,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2F3336',
  },
  postContent: {
    flex: 1,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  verified: {
    color: '#1D9BF0',
    fontWeight: 'bold',
    marginHorizontal: 4,
  },
  username: {
    color: '#71767B',
    fontSize: 13,
  },
  more: {
    color: '#71767B',
    marginLeft: 'auto',
  },
  postText: {
    color: '#E7E9EA',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },
  postImage: {
    width: '100%',
    height: 190,
    borderRadius: 14,
    marginTop: 12,
    borderWidth: 0.5,
    borderColor: '#333639',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  action: {
    color: '#71767B',
    fontSize: 12,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 25,
    width: 56,
    height: 56,
    borderRadius: 30,
    backgroundColor: '#1D9BF0',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  fabText: {
    color: '#FFFFFF',
    fontSize: 35,
    lineHeight: 40,
  },
});
