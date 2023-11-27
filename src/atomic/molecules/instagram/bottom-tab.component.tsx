import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { ThemeContext } from 'styled-components/native';

export const InstagramBottomTab = () => {
	const theme = useContext(ThemeContext);

	return (
		<View
			style={{
				height: 50,
				paddingHorizontal: 20,
				backgroundColor: theme.color.white,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginBottom: 20,
			}}>
			<Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
				<Path
					d="M0.5 8.09694L12 0.596936L23.5 8.09694V23.5H16.6739V17.7391C16.6739 16.0575 16.1103 14.751 15.2231 13.8638C14.3406 12.9813 13.1672 12.5435 12 12.5435C10.8328 12.5435 9.65939 12.9813 8.77688 13.8638C7.88967 14.751 7.32609 16.0575 7.32609 17.7391L7.32609 23.5H0.5L0.5 8.09694ZM7.32675 23.5001C7.32721 23.4999 7.32737 23.4999 7.32678 23.5C7.32683 23.4999 7.32683 23.4999 7.32674 23.5C7.32656 23.5002 7.32649 23.5002 7.32675 23.5001Z"
					fill="black"
					stroke="black"
				/>
			</Svg>
			<Svg viewBox="0 0 30 30" width="26px" height="26px">
				<Path
					strokeLinejoin="round"
					strokeLinecap="round"
					strokeMiterlimit={10}
					strokeWidth={1}
					stroke="#221b38"
					d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
				/>
			</Svg>
			<Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2ZM8 0C3.58172 0 0 3.58172 0 8V16C0 20.4183 3.58172 24 8 24H16C20.4183 24 24 20.4183 24 16V8C24 3.58172 20.4183 0 16 0H8ZM11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11V6Z"
					fill="black"
				/>
			</Svg>
			<Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
				<G clipPath="url(#clip0_907_34)">
					<Path
						d="M6.28571 0C2.82091 0 0 2.82091 0 6.28571V17.7143C0 21.1791 2.82091 24 6.28571 24H17.7143C21.1791 24 24 21.1791 24 17.7143V6.28571C24 2.82091 21.1791 0 17.7143 0H6.28571ZM7.5 1.36134H13.5L15.5294 5.66667H9.42336L7.5 1.36134ZM14.6879 1.36134H17.7143C20.5615 1.36134 22.5 3.43852 22.5 6.28571V5.66667H16.8519L14.6879 1.36134ZM6.28571 1.36134L8.10082 5.66667H1.5V6.28571C1.5 3.54276 3.58392 1.52103 6.28571 1.36134ZM1.5 6.80952H22.5V17.7143C22.5 20 20.5615 22.5 17.7143 22.5H6.28571C3.43852 22.5 1.5 20.5615 1.5 17.7143V6.80952ZM10.2734 9.67448C9.39152 9.69516 8.57143 10.392 8.57143 11.3564V16.5472C8.57143 17.8331 10.0299 18.6457 11.1484 18.0082L15.7132 15.4133C16.8245 14.7819 16.8245 13.1207 15.7132 12.4892L11.1484 9.89435C10.8688 9.73558 10.5674 9.66758 10.2734 9.67448Z"
						fill="black"
					/>
				</G>
				<Defs>
					<ClipPath id="clip0_907_34">
						<Rect width={24} height={24} fill="white" />
					</ClipPath>
				</Defs>
			</Svg>
			<View
				style={{
					width: 24,
					height: 24,
				}}>
				<Image
					source={require('@assets/images/icons/fake-profile.jpg')}
					style={{
						width: 26,
						height: 26,
						borderRadius: 13,
					}}
					resizeMode="cover"
				/>
			</View>
		</View>
	);
};
