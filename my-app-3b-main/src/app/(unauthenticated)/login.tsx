
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
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

        <Text style={styles.title}>Happening now.</Text>
        <Text style={styles.subtitle}>Welcome back to X</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#71767B"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#71767B"
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.or}>or</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?
          </Text>

          <Link href="/(unauthenticated)/register" asChild>
            <TouchableOpacity>
              <Text style={styles.link}> Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Text style={styles.terms}>
          By continuing, you agree to our Terms of Service
          and Privacy Policy.
        </Text>
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
    fontSize: 70,
    textAlign: 'center',
    marginBottom: 45,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: '#71767B',
    fontSize: 16,
    marginBottom: 35,
  },
  form: {
    gap: 10,
  },
  label: {
    color: '#E7E9EA',
    fontSize: 14,
    marginTop: 8,
  },
  input: {
    height: 58,
    backgroundColor: '#16181C',
    borderRadius: 12,
    paddingHorizontal: 18,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333639',
  },
  loginButton: {
    height: 55,
    backgroundColor: '#1D9BF0',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#333639',
  },
  or: {
    color: '#71767B',
    marginHorizontal: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
  },
  footerText: {
    color: '#71767B',
    fontSize: 15,
  },
  link: {
    color: '#1D9BF0',
    fontSize: 15,
    fontWeight: 'bold',
  },
  terms: {
    color: '#71767B',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 45,
    lineHeight: 20,
  },
});
