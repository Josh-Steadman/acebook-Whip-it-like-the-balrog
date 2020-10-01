import React from 'react';

let sweet = () => {
	window.alert("You liked this! 👍")
}

let no = () => {
	window.alert("You disliked this... 👎")
}


const Post = (props) => {

	return (

		<div className='post-main'>

			<div className='post-avatar'>
				{props.post.name === "Gandalf"?
					<img src="https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest/top-crop/width/360/height/450?cb=20121110131754"/>
					: props.post.name === "Bilbo"?
						<img src="https://i.redd.it/1yabzzu6lmd21.jpg"/>
						: props.post.name === "Frodo"?
							<img src="https://img.cinemablend.com/filter:scale/cb/d/a/2/2/e/9/da22e90569af458c138e33237415feedce0d8ae2c158954da64156968384284c.jpg?fw=1200"/>
							: props.post.name === "Aragorn"?
								<img src="https://vignette.wikia.nocookie.net/lotr/images/b/b6/Aragorn_profile.jpg/revision/latest?cb=20170121121423"/>
								: props.post.name === "Gimli"?
									<img src="https://vignette.wikia.nocookie.net/lotr/images/5/57/Gimli_at_the_siege_of_moria.jpg/revision/latest/scale-to-width-down/340?cb=20070726164348"/>
									: props.post.name === "Legolas"?
										<img src="https://vignette.wikia.nocookie.net/lotr/images/3/33/Legolas_-_in_Two_Towers.PNG/revision/latest/top-crop/width/360/height/450?cb=20120916035151"/>
										:props.post.name === "Sam"?
											<img src="https://pm1.narvii.com/6252/2fcc8aee41210b8ddfe8dd4851c6474c1d28bac8_00.jpg"/>
											:props.post.name === "Pippin"?
												<img src="https://vignette.wikia.nocookie.net/pjhobbitlotr/images/8/86/PippinBoyd.png/revision/latest?cb=20170219174505"/>
													:props.post.name === "Merry"?
													<img src="https://i.pinimg.com/originals/89/89/5b/89895b4902071e9978e5fc5c25a31970.jpg"/>
													:props.post.name === "Elrond"?
														<img src="https://vignette.wikia.nocookie.net/lotr/images/6/69/Elrond11.jpg/revision/latest?cb=20060310082451"/>
														:props.post.name === "Saruman"?
															<img src="https://vignette.wikia.nocookie.net/lotr/images/0/0c/Christopher_Lee_as_Saruman.jpg/revision/latest/top-crop/width/360/height/450?cb=20170127113833"/>
															:props.post.name === "Sauron"?
																<img src="https://pbs.twimg.com/profile_images/3536610637/a921387e1d2702bd52c44256672d0ee2_400x400.jpeg"/>
																:props.post.name === "Gollum"?
																	<img src="https://pyxis.nymag.com/v1/imgs/e52/04d/e6830f166c141a1a40be6d566887921d38-gollum.rvertical.w1200.jpg"/>
																		:props.post.name === "Boromir"?
																		<img src="https://giantbomb1.cbsistatic.com/uploads/scale_medium/2/27024/857251-boromir6.jpg"/>
																		:props.post.name === "Palpatine"?
																			<img src="https://i.redd.it/1c3bk0d6onq01.jpg"/>
																			:props.post.name === "Darth Sidious"?
																				<img src="https://i.pinimg.com/236x/03/36/40/0336405d062a768ed0ffc59dcf712d2d.jpg"/>
																				:props.post.name === "Darth Vader"?
																					<img src="https://i.pinimg.com/originals/9a/cc/4f/9acc4fdaef4486503284ee681bfd656c.jpg"/>
																					:props.post.name === "Darth Maul"?
																						<img src="https://i.pinimg.com/originals/3d/d7/5a/3dd75a11d8498b92ad8fd5cd7d02043d.jpg"/>
																						:props.post.name === "Obi-wan"?
																							<img src="https://cdn.vox-cdn.com/thumbor/KnYjrcxAozD5Q8pmr3QAXsJCwag=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6434955/obi-wan.0.jpg"/>
																							:props.post.name === "Galadriel"?
																								<img src="https://vignette.wikia.nocookie.net/lotr/images/9/91/LadyGaladriel.jpg/revision/latest/scale-to-width-down/340?cb=20150806142301"/>
																								:props.post.name === "Arwen"?
																									<img src="https://i.pinimg.com/originals/16/46/d8/1646d842afe50bd80c4425245f86ef35.jpg"/>
						: <img src="https://giantbomb1.cbsistatic.com/uploads/scale_small/14/141402/2380577-2662941_grima_wormtongue_large_1_.jpg"/>
				}
			</div>
			<div className='post-box'>
				<div className='post-content'>
					{props.post.content}
				</div>
				<div className='post-footer'>
					<div className='post-info'>
						<span className='post-name'>
							{props.post.name}
						</span>
						<span className='post-time'>
							{props.post.post_time}
						</span>
					</div>
				</div>
				{/*<button className="btn-like" id="help" onClick={incrementMe}>Likes: {count}</button>*/}
				{/*<button className="btn-like" id="help" type="button"><div id="counting">0</div></button>*/}
				<button className="btn-like" id="help" onClick={sweet}>{" 👍 |"}&nbsp;</button>
				<button className="btn-like" id="help" onClick={no}>{"👎"}</button>
			</div>
		</div>

	)
}

export default Post;
