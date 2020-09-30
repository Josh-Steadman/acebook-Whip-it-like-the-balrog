import React from 'react';

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
											:props.post.name === "Boromir"?
												<img src="https://giantbomb1.cbsistatic.com/uploads/scale_medium/2/27024/857251-boromir6.jpg"/>
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
				{/*<div className="post-actions">*/}
				{/*	<a href="#">Reply</a>*/}
				{/*</div>*/}
			</div>
		</div>

	)
}

export default Post;
