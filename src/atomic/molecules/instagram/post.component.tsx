import { Icon, ImageFullSize } from '@atomic/atoms';
import { useNavigation } from '@react-navigation/native';
import React, { FC, useContext } from 'react';
import {
	Image,
	ImageProps,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	useWindowDimensions,
} from 'react-native';
import Video from 'react-native-video';
import { ThemeContext } from 'styled-components/native';

export type InstagramPostProps = {
	userName: string;
	userPhoto: string | ImageProps | any;
	postPhoto: string | ImageProps | any;
	location: string;
	numberOfLikes: number;
	numberOfComments: number;
	caption: string;
	adDescription: string | null;
};

export const InstagramVideo: FC<InstagramPostProps> = ({
	userName,
	userPhoto,
	location,
	numberOfLikes,
	numberOfComments,
	caption,
	adDescription,
}) => {
	const theme = useContext(ThemeContext);
	const { navigate } = useNavigation();
	const { width } = useWindowDimensions();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View
					style={{
						flexDirection: 'row',
					}}>
					{typeof userPhoto === 'string' ? (
						<Image source={{ uri: userPhoto }} style={styles.userPhoto} />
					) : (
						<Image source={userPhoto} style={styles.userPhoto} />
					)}
					<View style={styles.headerInfo}>
						<Text style={styles.userName}>{userName}</Text>
						<Text style={styles.location}>{location}</Text>
					</View>
				</View>
				<TouchableOpacity>
					<Icon
						iconFamily="ionicons"
						iconName="ellipsis-vertical"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
			</View>
			<Video
				source={require('@scenes/awareness/instagram.mp4')}
				style={{ width: width, height: 360 }}
				controls={false}
				repeat={true}
				fullscreen={false}
				resizeMode="cover"
				onBuffer={this.videoBuffer}
				ref={ref => (this.player = ref)}
			/>
			{adDescription && (
				<Pressable
					onPress={() => {
						navigate('BottomTab');
					}}
					style={[styles.adActions, { backgroundColor: theme.color.white }]}>
					<Text style={styles.adDescription}>{adDescription}</Text>
					<Icon
						iconFamily="materialIcons"
						iconName="keyboard-arrow-right"
						size={24}
						color={theme.color.black}
					/>
				</Pressable>
			)}
			<View style={styles.actions}>
				<TouchableOpacity>
					<Icon
						iconFamily="ionicons"
						iconName="heart-outline"
						size={26}
						color="black"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={{ marginHorizontal: 16 }}>
					<View
						style={{
							transform: [{ rotate: '-90deg' }],
						}}>
						<Icon
							iconFamily="ionicons"
							iconName="chatbubble-outline"
							size={24}
							color="black"
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<Icon
						iconFamily="ionicons"
						iconName="paper-plane-outline"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.saveAction}>
					<Icon
						iconFamily="ionicons"
						iconName="bookmark-outline"
						size={23}
						color="black"
					/>
				</TouchableOpacity>
			</View>
			<Text style={styles.likes}>{numberOfLikes} likes</Text>
			<Text style={styles.caption}>
				<Text style={styles.userName}>{userName} </Text>
				{caption}
			</Text>
			<Text style={styles.comments}>{numberOfComments} comments</Text>
		</View>
	);
};

export const InstagramPost: FC<InstagramPostProps> = ({
	userName,
	userPhoto,
	postPhoto,
	location,
	numberOfLikes,
	numberOfComments,
	caption,
	adDescription,
}) => {
	const theme = useContext(ThemeContext);
	const { navigate } = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View
					style={{
						flexDirection: 'row',
					}}>
					{typeof userPhoto === 'string' ? (
						<Image source={{ uri: userPhoto }} style={styles.userPhoto} />
					) : (
						<Image source={userPhoto} style={styles.userPhoto} />
					)}
					<View style={styles.headerInfo}>
						<Text style={styles.userName}>{userName}</Text>
						<Text style={styles.location}>{location}</Text>
					</View>
				</View>
				<TouchableOpacity>
					<Icon
						iconFamily="ionicons"
						iconName="ellipsis-vertical"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
			</View>
			{typeof postPhoto === 'string' ? (
				<Image source={{ uri: postPhoto }} style={styles.postPhoto} />
			) : (
				<ImageFullSize source={postPhoto} />
			)}
			{adDescription && (
				<Pressable
					onPress={() => {
						navigate('BottomTab');
						// console.log('Ad description pressed');
					}}
					style={[styles.adActions, { backgroundColor: theme.color.white }]}>
					<Text style={styles.adDescription}>{adDescription}</Text>
					<Icon
						iconFamily="materialIcons"
						iconName="keyboard-arrow-right"
						size={24}
						color={theme.color.black}
					/>
				</Pressable>
			)}
			<View style={styles.actions}>
				<TouchableOpacity>
					<Icon
						iconFamily="ionicons"
						iconName="heart-outline"
						size={26}
						color="black"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={{ marginHorizontal: 16 }}>
					<View
						style={{
							transform: [{ rotate: '-90deg' }],
						}}>
						<Icon
							iconFamily="ionicons"
							iconName="chatbubble-outline"
							size={24}
							color="black"
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<Icon
						iconFamily="ionicons"
						iconName="paper-plane-outline"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.saveAction}>
					<Icon
						iconFamily="ionicons"
						iconName="bookmark-outline"
						size={23}
						color="black"
					/>
				</TouchableOpacity>
			</View>
			<Text style={styles.likes}>{numberOfLikes} likes</Text>
			<Text style={styles.caption}>
				<Text style={styles.userName}>{userName} </Text>
				{caption}
			</Text>
			<Text style={styles.comments}>{numberOfComments} comments</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		marginBottom: 16,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
	},
	userPhoto: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	headerInfo: {
		marginLeft: 10,
		flexDirection: 'column',
	},
	userName: {
		color: 'black',
		fontWeight: 'bold',
	},
	location: {
		color: 'black',
	},
	postPhoto: {
		width: '100%',
		minHeight: 300,
	},
	actions: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
	},
	saveAction: {
		marginLeft: 'auto',
	},
	likes: {
		fontWeight: 'bold',
		marginLeft: 10,
		marginBottom: 5,
	},
	caption: {
		marginLeft: 10,
		marginBottom: 5,
	},
	comments: {
		color: 'gray',
		marginLeft: 10,
		marginBottom: 10,
	},
	adActions: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderBottomWidth: 1,
		borderBottomColor: '#D3D3D3',
		marginHorizontal: 12,
	},
	adDescription: {
		color: 'black',
		fontWeight: 'bold',
	},
});
