
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

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.back}>‹</Text>

        <View>
          <Text style={styles.headerName}> Cezar Ian Dave O. Dalisay</Text>
          <Text style={styles.headerPosts}>10 posts</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Cover Photo */}
        <Image
          source={{
            uri: 'https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/723562350_2326739211067254_2029022884189184361_n.jpg?stp=dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=KPevUNy0kC0Q7kNvwEHX0MN&_nc_oc=Adr_2ukvKu-W5FEDMgcwMz5238KeMQWJxA_CNZS4phmwVVoVlTS6bXtMHxQQNo4cuz8&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=tt5yvRZ0LX1JYXXIKy316Q&_nc_ss=7b2a8&oh=00_AQQ5bpYGW1yPU4UDW9bA9qy9ymb-ozfK0pcbOeguN-pZgA&oe=6B0196B4',
          }}
          style={styles.cover}
        />

        {/* Profile Picture and Edit Button */}
        <View style={styles.profileActions}>
          <Image
            source={{ uri: 'https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/817391317_2410875649320276_6984919221040350803_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=PmHd4wB2NicQ7kNvwGD3xnr&_nc_oc=Adr06ug17WD-rreBSUxzONpJO8jtuxo80lwOXUxxwklFOuw-QW9Jcc95reUHwbG_FhI&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=IiysKWujsKrFGNAKMDIjmA&_nc_ss=7b2a8&oh=00_AQSND8QFC4GqEkbd5JCmf71eOXQyxrtEWdQgkRfGaUvOfg&oe=6B01A372' }}
            style={styles.profileImage}
          />

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit profile</Text>
          </TouchableOpacity>
        </View>

        {/* Personal Details */}
        <View style={styles.info}>
          <Text style={styles.name}>  Cezar Ian Dave O. Dalisay</Text>
          <Text style={styles.username}>@cezarDalisay</Text>

          <Text style={styles.bio}>
            Developer | Tech Enthusiast 💻
            {'\n'}
            Sharing thoughts, ideas and experiences.
            {'\n'}
            Learning something new every day 🚀
          </Text>

          <View style={styles.details}>
            <Text style={styles.detailText}>⌖ Philippines</Text>
            <Text style={styles.detailText}>
              ▣ Joined November 2026
            </Text>
          </View>

          <View style={styles.stats}>
            <Text style={styles.stat}>
              <Text style={styles.statNumber}>245 </Text>
              Following
            </Text>

            <Text style={styles.stat}>
              <Text style={styles.statNumber}>1,250 </Text>
              Followers
            </Text>
          </View>
        </View>

        {/* Profile Navigation */}
        <View style={styles.tabs}>
          <View style={styles.tab}>
            <Text style={styles.activeTab}>Posts</Text>
            <View style={styles.activeLine} />
          </View>

          <View style={styles.tab}>
            <Text style={styles.tabText}>Replies</Text>
          </View>

          <View style={styles.tab}>
            <Text style={styles.tabText}>Media</Text>
          </View>

          <View style={styles.tab}>
            <Text style={styles.tabText}>Likes</Text>
          </View>
        </View>

        {/* First Post */}
        <View style={styles.post}>
          <Image
            source={{ uri: 'https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/817391317_2410875649320276_6984919221040350803_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=PmHd4wB2NicQ7kNvwGD3xnr&_nc_oc=Adr06ug17WD-rreBSUxzONpJO8jtuxo80lwOXUxxwklFOuw-QW9Jcc95reUHwbG_FhI&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=IiysKWujsKrFGNAKMDIjmA&_nc_ss=7b2a8&oh=00_AQSND8QFC4GqEkbd5JCmf71eOXQyxrtEWdQgkRfGaUvOfg&oe=6B01A372' }}
            style={styles.avatar}
          />

          <View style={styles.postContent}>
            <Text style={styles.postHeader}>
              Cezar Ian Dave O. Dalisay
              <Text style={styles.username}>
                {' '}@cezarDalisay · 2h
              </Text>
            </Text>

            <Text style={styles.postText}>
              Building something amazing! Keep pushing forward. 🚀
            </Text>

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
              }}
              style={styles.postImage}
            />

            <View style={styles.actions}>
              <Text style={styles.action}>♡ 24</Text>
              <Text style={styles.action}>⇄ 12</Text>
              <Text style={styles.action}>♡ 120</Text>
              <Text style={styles.action}>↗</Text>
            </View>
          </View>
        </View>

        {/* Second Post */}
        <View style={styles.post}>
          <Image
            source={{ uri: 'https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/817391317_2410875649320276_6984919221040350803_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=PmHd4wB2NicQ7kNvwGD3xnr&_nc_oc=Adr06ug17WD-rreBSUxzONpJO8jtuxo80lwOXUxxwklFOuw-QW9Jcc95reUHwbG_FhI&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=IiysKWujsKrFGNAKMDIjmA&_nc_ss=7b2a8&oh=00_AQSND8QFC4GqEkbd5JCmf71eOXQyxrtEWdQgkRfGaUvOfg&oe=6B01A372' }}
            style={styles.avatar}
          />

          <View style={styles.postContent}>
            <Text style={styles.postHeader}>
      Cezar Ian Dave O. Dalisay
              <Text style={styles.username}>
                {' '}@cezarDalisay · 1d
              </Text>
            </Text>

            <Text style={styles.postText}>
              Good vibes only. Keep growing and stay focused! ✨
            </Text>

            <View style={styles.actions}>
              <Text style={styles.action}>♡ 18</Text>
              <Text style={styles.action}>⇄ 8</Text>
              <Text style={styles.action}>♡ 75</Text>
              <Text style={styles.action}>↗</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    gap: 22,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2F3336',
  },
  back: {
    color: '#FFFFFF',
    fontSize: 35,
  },
  headerName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  headerPosts: {
    color: '#71767B',
    fontSize: 12,
  },
  cover: {
    width: '100%',
    height: 160,
    backgroundColor: '#16181C',
  },
  profileActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: -43,
  },
  profileImage: {
    width: 88,
    height: 88,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#000000',
  },
  editButton: {
    borderWidth: 1,
    borderColor: '#71767B',
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 25,
    marginTop: 48,
  },
  editText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  info: {
    padding: 16,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
  },
  username: {
    color: '#71767B',
    fontSize: 14,
  },
  bio: {
    color: '#E7E9EA',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginTop: 12,
  },
  detailText: {
    color: '#71767B',
    fontSize: 12,
  },
  stats: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 15,
  },
  stat: {
    color: '#71767B',
    fontSize: 13,
  },
  statNumber: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  tabs: {
    height: 52,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#2F3336',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  tabText: {
    color: '#71767B',
    fontSize: 13,
  },
  activeLine: {
    position: 'absolute',
    bottom: 0,
    height: 4,
    width: 45,
    borderRadius: 5,
    backgroundColor: '#1D9BF0',
  },
  post: {
    flexDirection: 'row',
    padding: 15,
    gap: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2F3336',
  },
  avatar: {
    width: 43,
    height: 43,
    borderRadius: 25,
  },
  postContent: {
    flex: 1,
  },
  postHeader: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  postText: {
    color: '#E7E9EA',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
  postImage: {
    width: '100%',
    height: 180,
    borderRadius: 13,
    marginTop: 12,
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
});
