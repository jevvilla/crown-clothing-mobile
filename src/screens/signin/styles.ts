import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontFamily: 'OpenSansCondensed-Bold',
    fontSize: 24,
  },
  subtitle: {
    fontFamily: 'OpenSansCondensed-Light',
    fontSize: 18,
    lineHeight: 60,
  },
  input: {
    fontFamily: 'OpenSansCondensed-Light',
    fontSize: 16,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderColor: 'black',
    ...Platform.select({
      ios: {
        marginBottom: 22,
      },
      android: {
        marginBottom: 12,
      },
    }),
  },
});
