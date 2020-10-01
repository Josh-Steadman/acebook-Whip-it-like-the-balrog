import React from 'react';

const Pictures = (props) => {

    var name = document.getElementById('the-name').innerHTML;

    return (
        <div className='post-main'>
            <div className='post-avatar'>
                {name === "<span>Gandalf</span>"?
                    <img src="https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest/top-crop/width/360/height/450?cb=20121110131754"/>
                    : name === "<span>Bilbo</span>"?
                        <img src="https://i.redd.it/1yabzzu6lmd21.jpg"/>
                        : name === "<span>Frodo</span>"?
                            <img src="https://img.cinemablend.com/filter:scale/cb/d/a/2/2/e/9/da22e90569af458c138e33237415feedce0d8ae2c158954da64156968384284c.jpg?fw=1200"/>
                            : name === "<span>Aragorn</span>"?
                                <img src="https://vignette.wikia.nocookie.net/lotr/images/b/b6/Aragorn_profile.jpg/revision/latest?cb=20170121121423"/>
                                : name === "<span>Gimli</span>"?
                                    <img src="https://vignette.wikia.nocookie.net/lotr/images/5/57/Gimli_at_the_siege_of_moria.jpg/revision/latest/scale-to-width-down/340?cb=20070726164348"/>
                                    : name === "<span>Legolas</span>"?
                                        <img src="https://vignette.wikia.nocookie.net/lotr/images/3/33/Legolas_-_in_Two_Towers.PNG/revision/latest/top-crop/width/360/height/450?cb=20120916035151"/>
                                        :name === "<span>Sam</span>"?
                                            <img src="https://pm1.narvii.com/6252/2fcc8aee41210b8ddfe8dd4851c6474c1d28bac8_00.jpg"/>
                                            :name === "<span>Pippin</span>"?
                                                <img src="https://vignette.wikia.nocookie.net/pjhobbitlotr/images/8/86/PippinBoyd.png/revision/latest?cb=20170219174505"/>
                                                :name === "<span>Merry</span>"?
                                                    <img src="https://i.pinimg.com/originals/89/89/5b/89895b4902071e9978e5fc5c25a31970.jpg"/>
                                                    :name === "<span>Elrond</span>"?
                                                        <img src="https://vignette.wikia.nocookie.net/lotr/images/6/69/Elrond11.jpg/revision/latest?cb=20060310082451"/>
                                                        :name === "<span>Saruman</span>"?
                                                            <img src="https://vignette.wikia.nocookie.net/lotr/images/0/0c/Christopher_Lee_as_Saruman.jpg/revision/latest/top-crop/width/360/height/450?cb=20170127113833"/>
                                                            :name === "<span>Sauron</span>"?
                                                                <img src="https://pbs.twimg.com/profile_images/3536610637/a921387e1d2702bd52c44256672d0ee2_400x400.jpeg"/>
                                                                :name === "<span>Gollum</span>"?
                                                                    <img src="https://pyxis.nymag.com/v1/imgs/e52/04d/e6830f166c141a1a40be6d566887921d38-gollum.rvertical.w1200.jpg"/>
                                                                    :name === "<span>Boromir</span>"?
                                                                        <img src="https://giantbomb1.cbsistatic.com/uploads/scale_medium/2/27024/857251-boromir6.jpg"/>
                                                                        :name === "<span>Palpatine</span>"?
                                                                            <img src="https://i.redd.it/1c3bk0d6onq01.jpg"/>
                                                                            :name === "<span>Darth Sidious</span>"?
                                                                                <img src="https://i.pinimg.com/236x/03/36/40/0336405d062a768ed0ffc59dcf712d2d.jpg"/>
                                                                                :name === "<span>Darth Vader</span>"?
                                                                                    <img src="https://i.pinimg.com/originals/9a/cc/4f/9acc4fdaef4486503284ee681bfd656c.jpg"/>
                                                                                    :name === "<span>Darth Maul</span>"?
                                                                                        <img src="https://i.pinimg.com/originals/3d/d7/5a/3dd75a11d8498b92ad8fd5cd7d02043d.jpg"/>
                                                                                        :name === "<span>Obi-wan</span>"?
                                                                                            <img src="https://cdn.vox-cdn.com/thumbor/KnYjrcxAozD5Q8pmr3QAXsJCwag=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6434955/obi-wan.0.jpg"/>
                                                                        : <img src="https://giantbomb1.cbsistatic.com/uploads/scale_small/14/141402/2380577-2662941_grima_wormtongue_large_1_.jpg"/>
                }
            </div>
    </div>
            )
}

export default Pictures;
