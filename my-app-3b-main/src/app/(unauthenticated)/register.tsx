
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Link } from 'expo-router';

export default function Register() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.logo}>𝕏</Text>

        <Text style={styles.title}>Create your account</Text>
        <Text style={styles.subtitle}>
          Join the conversation. What's happening?
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            placeholderTextColor="#71767B"
          />

          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#71767B"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#71767B"
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#71767B"
            secureTextEntry
          />

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.buttonText}>Create account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>

          <Link href="/(unauthenticated)/login" asChild>
            <TouchableOpacity>
              <Text style={styles.link}> Log in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 40,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 65,
    textAlign: 'center',
    marginBottom: 35,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 10,
  },
  subtitle: {
    color: '#71767B',
    fontSize: 15,
    marginBottom: 30,
  },
  form: {
    gap: 16,
  },
  input: {
    height: 58,
    backgroundColor: '#16181C',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333639',
    paddingHorizontal: 18,
    color: '#FFFFFF',
    fontSize: 16,
  },
  registerButton: {
    height: 55,
    backgroundColor: '#1D9BF0',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
  },
  footerText: {
    color: '#71767B',
    fontSize: 14,
  },
  link: {
    color: '#1D9BF0',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
