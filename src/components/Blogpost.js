import Aside from '@/components/Aside.js';
import Share from '@/components/Share.js';

export default function Blogpost() {
  return (
    <section className="blogpost container">
      <div className="blogpost__image">
        <img src="" alt="" />
      </div>
      <div className="blogpost__main">
        <div className="blogpost__aside">
          <Aside className={'blogpost__categories'} />
          <Share className={'blogpost__share'} />
        </div>
        <div className="blogpost__content">
          <h3>First Blog Post Title Heading One</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra nunc
            id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue enim eu.
            Imperdiet sapien consectetur tincidunt accumsan fermentum facilisis elementum. Ultrices sit in arcu tempus
            ipsum velit vulputate metus, in. Tellus habitasse aliquet morbi orci at ligula elit ut ut. Augue sed
            consequat molestie senectus adipiscing arcu faucibus. Tincidunt dolor in felis dictum risus. Semper et
            pellentesque augue maecenas purus eros. Viverra lobortis faucibus non eget odio iaculis venenatis, cras.
            Scelerisque at quisque adipiscing imperdiet neque nisi, lacus. Sit facilisi id varius cras eleifend dictum.
            Fermentum, vel suspendisse accumsan, enim ut ut imperdiet leo, eget. Nam etiam felis sed lobortis ridiculus
            ornare. Condimentum nunc, urna, urna, risus justo maecenas fames. Suspendisse praesent vel eros tellus,
            dignissim aliquet et pharetra odio. Porta feugiat aliquam mi fermentum in quam. Turpis pretium sem ultrices
            mauris auctor nunc pellentesque. Condimentum eget tempus id praesent egestas ut cursus. Netus purus
            suspendisse phasellus mollis. Habitant arcu in duis purus habitant faucibus lectus senectus nec. Pharetra
            hendrerit venenatis lacus, blandit ullamcorper iaculis id. Id sed pellentesque sed fermentum sed orci justo,
            diam vivamus. Quis auctor et tristique aliquam condimentum varius egestas orci nulla. Laoreet egestas quam
            lacus non euismod nec sed. Id turpis neque, at et, quisque aenean risus. Lectus arcu eget ultricies sit a
            volutpat phasellus. Varius in massa egestas purus ac. Duis sit elit eu amet suspendisse volutpat justo
            nullam. Placerat convallis mi malesuada enim vitae quam lorem dictum. Mattis ut consequat magna urna
            posuere. Egestas sodales venenatis sed purus tincidunt nec mi sed. Eget aliquet elementum, integer id sed
            blandit vestibulum. Facilisi urna sagittis massa nibh accumsan, ultricies ultrices tincidunt.
          </p>
          <h4>Sub Heading</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra nunc
            id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue enim eu.
            Imperdiet sapien consectetur tincidunt accumsan fermentum facilisis elementum. Ultrices sit in arcu tempus
            ipsum velit vulputate metus, in. Tellus habitasse aliquet morbi orci at ligula elit ut ut. Augue sed
            consequat molestie senectus adipiscing arcu faucibus. Tincidunt dolor in felis dictum risus. Semper et
            pellentesque augue maecenas purus eros. Viverra lobortis faucibus non eget odio iaculis venenatis, cras.
          </p>
        </div>
      </div>
    </section>
  );
}
