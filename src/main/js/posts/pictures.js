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
                                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUXFxcXFxcYFxgVFxcXFRUWFxUXFxUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEHAP/EADwQAAEDAwMCAwUGBQQBBQAAAAEAAhEDBCESMUEFUWFxgQYTIpHRMlKSobHBFDNCU/AjcuHxQwcVYoKT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIhEAAwEBAAMAAwADAQAAAAAAAAECESEDEjEiQVEEYXET/9oADAMBAAIRAxEAPwDCVrmoJ/1H/id9ULUvqn9yp+N31V1ZsyuMoDlTJPShl7V/uP8Axu+qkLmrP8yp+N31VVXfCJpPAGVkD/p9/EVf7j/xu+q6+8qf3H/jd9VEu1Lr7fwlBseUEWN+8H+Y/wDEfqmlStV3Dnx/uKXdPsfiErRG33GzQlfR0mKHXD3EfG/8R+qu0VH4944eOpw/ddfamJAgd0VatAaSZOnfugN6MDqWj2nNV5Iz9t31V9ChUOdT4jA1H6r59y1xGgEeG4nxKIc90SMmYI2R3gVHQCvSq5l7wI+8fqg6lOruKr/xu/SU0rVHtkOaD2zKFfVbyIPIKCZnADXZULyW1akf73AbeaoqsqAS2rUcO+t2/bdMqlQObAx5Kq3I0kDM5TieuCl93UA/m1B/93fVVNvap/8AJU/G76ou5pNk5jnvCGqUp+zkQmJOP2UOvas/zan43fVXUeoVf7j/AMbvqhg3OVJgErbog3ZVqOH81/4nfVU1X1R/5an43fVUMrEFcuLjUjiN9K33VX+7U/G76rn8bU/u1Pxu+qg6kSotpHlYHT6rdVokVan/AOj/AKree/qffd+IrCPowt6shpZk3P3hDurklQdWgkKykOUG8Cj7V3U3snZTDAUV0+mAfi9Ev0YptbN7iAAn1p0stw780z6HTkucG7CASMaiu12EEGfM+W6Rst4450pr0A0xx3/RX1LhphkSBEjup3lT3jYaRq/zdB6Q12nWNQBz3PZDSylIs6zcM9yXQBp2G3os3Y1nEkR9r7XlwnIp0303NPxOyHA8HiFQzp5ZR1DLjl3cDhKn0Zy2C1DsGq+nckgtdnuPLsqLSnkjnhQrvhw7/VFCsvfbN06qVTUeWu3SypfBwGrBEifLuiIMS07FCdeoYaWiNWT58pkgPp2ox2Htg+SraSdsE7hKqVZzDglNLK8bV+E/C/g91QizjHZh3GJKjVJaYBwuPruDtLgPNdonXsMrC0gc0oJ/JW02ABfXLIwBsqqdTuEeEGnpCu8gq2k0HdC3L5OFSK5GEyEawZ1KgbwhnXcoZ7yqgD2Q/QehrrnC3+pebgL0PUihpZja9EapUtfCam0YSjKPS6YyUjsrwR0qbhwtJadPNRrdLc8f8quo+mMCFpegfC17/ugAeJKT34NK1h1KmKbG0wDAHxHgu5yk/UnGdscALR1TgY4B+fCW1qQlzyZAB8vRS3p2qUL+mUIDnu4BPkeEgr25d8QwTOfIp4bkvo1Gt31CY+6UJfH7OkYaAB4oNhSK2U4dPLsn0CIFXAIGYj05UKNMmZ3P5KApRAByN/JbRlLwHq2ulxj0UYDsOGRz9Uw0zJ+SrumDgJkxfVCqYkAIO8Opo+SLqN3Q4b8k6J2hLXtdzwELRZHxAbEJ7cs+Ex3QFu0NcZGDlNpNosq1h8TzEx+cKm2ug0YxO53KIf09rgSHETwUK2xIac7bIiNBjIdndRfQEIe3fwZ80ax+M/NFMRyCGgCh6ltCZlnK45oLfVFEWhUKJUKhTRsDCBqNGoosRd4VMbIXoOhYQHBC30LaGfpnqli6YajadpU0wSqbC5JcccphXvgApNMumK6VofeAHac+QXoNjb6aOoiNZLo7DhYJl4J1eK9EZUig0nlo+SW+It4cbBbu9Y2mA5wBA27qFVoNASd5J8kPULajoc37LcTvJ3KKfRHuhG0fl3UTrRnat1odDAQNtv2VtO4cWSW578/JWWtqdckTPHgmt1aNgQCEtPGPMiayadWeUbfWcj4cFWNt8iES1pCrCCIGEtwVy4qYgJzVtASqhaRwmwngrbZfDsllW3gwd1rNIhCV7QO3TYbEZSrSc3iQhK9MHZae4ssQs/eUCCY2WJ1KFV28tGSghckid+Ec+1c6XFA1gA2BkzJKY56QbRqDSSeysdVxt2JQtESwE7Iqu74RA3ACIhz3nbZVvrELtNqqcZT7wha6SIJEhU0aLico1saYBXKQLUwvw5UowFt4Kw9dxK3OkoMMmftr9rZEZVTnOqO2MK+1tWgklEmu1uwUt6VBf4EkgDuP1XqluGmkwfdH6crzej1ALVezdc1GOGYBznZLS0t4XjCL62zrH2Xy0xv4FK33gYfcOOR+ib9Qrhoj8+wCRNoNrPLnCScA+CizrQ16XUGoncbDyTmuAWApZS6aGwwHbJUusXdQM0talS1ltxEmsCsqNHqsfcXtYScjwCHo9Rqk5JC6FBH/ANH/AA2MCVYSOUjtrgk7qy9qkH0VMRvYtvr5jeUmrddYNpKVdQc4kj90BQ920y8yeyyI1VDup11vIKE/iWuJhdo39B39Pqvrq2YRqbAPgswLX+yiv/KIA3SlloNI4CYF/B9UPeH4QG7JRaF9Q4jjMKu1uTAadphGX1HS1vkl1lS1OjxR0mX0y7URGytdTUw74z2U3FNIlgLQZ3RTHL4sG65qTMiybnLde8XntZ+Ct3KGhkzrbuJQr6pcVQ8kErlKrlLwZMa0bUxK9B6Db+7oHYkxJWEoEltNsbnUfOcBbxtXRRgjsAfPdJfw6fCug/WLQvawg/a37K+2oNptnGArrqsPdM8JQtWoNJPCgzsQXavP2j3z5FK/aPqrgdLfmntjQL6UjkLll0ZpDnPEnjwjlBLOlPqPNupV7hvIEgu+LEBU2letGsgELbde6aaxAc3LdnDBjsUJbdLdAZHoupVDRyvx2q/0VeztI1KjWnY/smntBa6SQE89nukikfePAEbBLvaUySQo+/5YjoUfiYN9AunuSvr7ojWNa/RrwZ/3cTHCYNw6Uyba6hgn0XTLw5bj24ZK06X/AKZJwcRGD4+iP6fQOkAyno6aAuupAYQppgmPVcM3f28Slz6UsJ5C0HUmbpU8w2RukZqQs6i6aTfDCDsK4aPy9ETc1wDpcMH9UKKek8QeVkRf0trQDIyFM14A7KmrE45XzyNMIoWkWNeHZE4UWCSqqHZEU8JvXSLK6rSt7pWCNaZW+1I4CTLUbM1HHsj2dNY0iImYS9vUPdgqNHqRcZSsd6amgWNdpbBMxP0Tt5mmY/pg5EyRyl/s7ZMLfePIk5aO3iU1p6uIAOW+XJU76dXi1dYuuKhqHUDgtjTsJHPmgLy6cG6cpv1C2Gs6JDt8bf8ACR3tAyM5lS/Z1I3vs7V/0hPb806ZS0tJI3WU6RULWjxAT/8AiSQAThKyqBLhsmAAibG0aDK+A7KmrcQQPmiEa3DW6ZLgBwO6yPVhuZSz2k6/XFYe7A0zBB7ILqvUHQSORt+y3jW9DTwFujmQmNk8xKy9lXqioQ+NJyMbLR9MqS31XSnpzfsZapQtYqb3QhLh6BmL+o5lJg/IHimtw6UhrPh0d9liVgnV4Lj6QhGAmOxV9y0uEHdWVLchrO8SfBFMgwZgktBGZKhJhWB51NMZGF9pP5orBKZY1sBUPqEK51RCXBJTPhAlTrCDK9D1LzIGF6RqTDyjKVwDKqt6RCIFOZVJIG6myhruk3Iw3uAU9tLz3jtZwxmAO6xFhdCWu1ZGI5xstrdDWKfugYIB2wO8pK50v4+je1oh4dO/2vQpL1exLXytEy5bTZmJjPpwkHVLo1Jj1PYKFfeHVL/o2sz8DT6fJMEt6I8Op6exBHkU7pUpKXS0nWN+FBfwx"/>
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
