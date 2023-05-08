import { useState, useEffect } from "react";

const ProductImages = ({ selectedStyleData }) => {
	const [selectedImage, setSelectedImage] = useState(
		selectedStyleData.photos[0]
	);

	useEffect(() => {
		setSelectedImage(selectedStyleData.photos[0]);
	}, [selectedStyleData.photos]);
	const changeImage = (index) => {
		setSelectedImage(selectedStyleData.photos[index]);
	};

	return (
		<div id="imageContainer">
			{/* main image */}
			<img src={selectedImage.url}></img>

			{/* additional row of images */}
			<ul id="extraImages">
				{selectedStyleData.photos.map((photo, index) => (
					<li key={index}>
						<img
							onClick={(e) => {
								changeImage(index);
							}}
							src={photo.thumbnail_url}
						></img>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductImages;