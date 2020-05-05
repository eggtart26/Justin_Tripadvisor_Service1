import React, { Component } from 'react';
import POIEntry from './POIEntry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pois: [false, false, false],
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(i) {
    const { pois } = this.state;
    pois[i] = !pois[i];
    this.setState(pois);
  }

  render() {
    return (
      <div className="block">
        <h1>Overview</h1>
        <p>Overview paragraph will go here hip hip hooray.</p>
        <h2>Itinerary</h2>
        <div className="map" />
        <span>You&rsquo;ll have # starting options</span>
        <ul className="itinerary">
          <POIEntry onClick={this.toggle} stopIndex={1} expand={this.state.pois[0]} />
          <POIEntry onClick={this.toggle} stopIndex={2} expand={this.state.pois[1]} />
          <POIEntry onClick={this.toggle} stopIndex={3} expand={this.state.pois[2]} />
        </ul>
        <span>You&rsquo;ll end at</span>
        <span>See Important Information for details</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper auctor neque vitae. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Quis auctor elit sed vulputate mi sit amet. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor sed viverra. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Amet nulla facilisi morbi tempus iaculis urna. In mollis nunc sed id semper risus in hendrerit. Amet commodo nulla facilisi nullam vehicula ipsum. Facilisi nullam vehicula ipsum a arcu cursus vitae. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum.
        </p>

        <p>
          Amet luctus venenatis lectus magna. Tempus urna et pharetra pharetra massa massa. Tristique senectus et netus et malesuada fames ac turpis. Ac turpis egestas integer eget. Est velit egestas dui id ornare. Nulla porttitor massa id neque aliquam vestibulum morbi. Montes nascetur ridiculus mus mauris vitae. Enim facilisis gravida neque convallis a cras semper. Accumsan tortor posuere ac ut consequat semper viverra. Tincidunt dui ut ornare lectus sit amet est placerat.
        </p>
        <p>
          Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Congue mauris rhoncus aenean vel elit scelerisque. Dui id ornare arcu odio. Semper risus in hendrerit gravida. Sit amet commodo nulla facilisi nullam. Eros in cursus turpis massa tincidunt dui ut. Vitae proin sagittis nisl rhoncus mattis rhoncus. Nunc lobortis mattis aliquam faucibus purus in. Nunc non blandit massa enim nec dui nunc mattis enim. Tincidunt eget nullam non nisi. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Urna nec tincidunt praesent semper feugiat. Turpis egestas integer eget aliquet nibh praesent. Convallis posuere morbi leo urna molestie at elementum. Sed enim ut sem viverra aliquet eget sit amet tellus. Vitae et leo duis ut diam. Vel eros donec ac odio tempor orci dapibus ultrices in. Dui vivamus arcu felis bibendum ut tristique et. Mauris in aliquam sem fringilla ut morbi tincidunt augue.
        </p>
        <p>
          Sollicitudin nibh sit amet commodo nulla facilisi. Turpis egestas integer eget aliquet nibh praesent. Diam quam nulla porttitor massa id neque aliquam. Turpis tincidunt id aliquet risus feugiat in. In hac habitasse platea dictumst quisque sagittis purus sit. Risus nec feugiat in fermentum posuere urna nec tincidunt. Turpis in eu mi bibendum neque egestas congue. Tortor vitae purus faucibus ornare suspendisse sed nisi. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis vitae. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Porttitor leo a diam sollicitudin tempor. Leo vel fringilla est ullamcorper eget nulla. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Amet purus gravida quis blandit turpis. Pretium quam vulputate dignissim suspendisse in est ante in. Enim praesent elementum facilisis leo vel fringilla est. Praesent tristique magna sit amet purus gravida quis blandit. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
        </p>
        <p>
          Erat imperdiet sed euismod nisi. Tincidunt vitae semper quis lectus. Risus quis varius quam quisque id diam vel. Amet nisl suscipit adipiscing bibendum est ultricies integer. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Nascetur ridiculus mus mauris vitae. Proin nibh nisl condimentum id venenatis a. Morbi blandit cursus risus at ultrices. In dictum non consectetur a erat nam at lectus. Tempor nec feugiat nisl pretium fusce id velit. In metus vulputate eu scelerisque felis imperdiet proin. Adipiscing vitae proin sagittis nisl rhoncus mattis. Donec enim diam vulputate ut pharetra sit amet aliquam.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper auctor neque vitae. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Quis auctor elit sed vulputate mi sit amet. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor sed viverra. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Amet nulla facilisi morbi tempus iaculis urna. In mollis nunc sed id semper risus in hendrerit. Amet commodo nulla facilisi nullam vehicula ipsum. Facilisi nullam vehicula ipsum a arcu cursus vitae. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum.
        </p>

        <p>
          Amet luctus venenatis lectus magna. Tempus urna et pharetra pharetra massa massa. Tristique senectus et netus et malesuada fames ac turpis. Ac turpis egestas integer eget. Est velit egestas dui id ornare. Nulla porttitor massa id neque aliquam vestibulum morbi. Montes nascetur ridiculus mus mauris vitae. Enim facilisis gravida neque convallis a cras semper. Accumsan tortor posuere ac ut consequat semper viverra. Tincidunt dui ut ornare lectus sit amet est placerat.
        </p>
        <p>
          Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Congue mauris rhoncus aenean vel elit scelerisque. Dui id ornare arcu odio. Semper risus in hendrerit gravida. Sit amet commodo nulla facilisi nullam. Eros in cursus turpis massa tincidunt dui ut. Vitae proin sagittis nisl rhoncus mattis rhoncus. Nunc lobortis mattis aliquam faucibus purus in. Nunc non blandit massa enim nec dui nunc mattis enim. Tincidunt eget nullam non nisi. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Urna nec tincidunt praesent semper feugiat. Turpis egestas integer eget aliquet nibh praesent. Convallis posuere morbi leo urna molestie at elementum. Sed enim ut sem viverra aliquet eget sit amet tellus. Vitae et leo duis ut diam. Vel eros donec ac odio tempor orci dapibus ultrices in. Dui vivamus arcu felis bibendum ut tristique et. Mauris in aliquam sem fringilla ut morbi tincidunt augue.
        </p>
        <p>
          Sollicitudin nibh sit amet commodo nulla facilisi. Turpis egestas integer eget aliquet nibh praesent. Diam quam nulla porttitor massa id neque aliquam. Turpis tincidunt id aliquet risus feugiat in. In hac habitasse platea dictumst quisque sagittis purus sit. Risus nec feugiat in fermentum posuere urna nec tincidunt. Turpis in eu mi bibendum neque egestas congue. Tortor vitae purus faucibus ornare suspendisse sed nisi. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis vitae. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Porttitor leo a diam sollicitudin tempor. Leo vel fringilla est ullamcorper eget nulla. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Amet purus gravida quis blandit turpis. Pretium quam vulputate dignissim suspendisse in est ante in. Enim praesent elementum facilisis leo vel fringilla est. Praesent tristique magna sit amet purus gravida quis blandit. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
        </p>
        <p>
          Erat imperdiet sed euismod nisi. Tincidunt vitae semper quis lectus. Risus quis varius quam quisque id diam vel. Amet nisl suscipit adipiscing bibendum est ultricies integer. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Nascetur ridiculus mus mauris vitae. Proin nibh nisl condimentum id venenatis a. Morbi blandit cursus risus at ultrices. In dictum non consectetur a erat nam at lectus. Tempor nec feugiat nisl pretium fusce id velit. In metus vulputate eu scelerisque felis imperdiet proin. Adipiscing vitae proin sagittis nisl rhoncus mattis. Donec enim diam vulputate ut pharetra sit amet aliquam.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper auctor neque vitae. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Quis auctor elit sed vulputate mi sit amet. Vitae congue eu consequat ac felis. Pharetra vel turpis nunc eget lorem dolor sed viverra. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Amet nulla facilisi morbi tempus iaculis urna. In mollis nunc sed id semper risus in hendrerit. Amet commodo nulla facilisi nullam vehicula ipsum. Facilisi nullam vehicula ipsum a arcu cursus vitae. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum.
        </p>

        <p>
          Amet luctus venenatis lectus magna. Tempus urna et pharetra pharetra massa massa. Tristique senectus et netus et malesuada fames ac turpis. Ac turpis egestas integer eget. Est velit egestas dui id ornare. Nulla porttitor massa id neque aliquam vestibulum morbi. Montes nascetur ridiculus mus mauris vitae. Enim facilisis gravida neque convallis a cras semper. Accumsan tortor posuere ac ut consequat semper viverra. Tincidunt dui ut ornare lectus sit amet est placerat.
        </p>
        <p>
          Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Congue mauris rhoncus aenean vel elit scelerisque. Dui id ornare arcu odio. Semper risus in hendrerit gravida. Sit amet commodo nulla facilisi nullam. Eros in cursus turpis massa tincidunt dui ut. Vitae proin sagittis nisl rhoncus mattis rhoncus. Nunc lobortis mattis aliquam faucibus purus in. Nunc non blandit massa enim nec dui nunc mattis enim. Tincidunt eget nullam non nisi. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Urna nec tincidunt praesent semper feugiat. Turpis egestas integer eget aliquet nibh praesent. Convallis posuere morbi leo urna molestie at elementum. Sed enim ut sem viverra aliquet eget sit amet tellus. Vitae et leo duis ut diam. Vel eros donec ac odio tempor orci dapibus ultrices in. Dui vivamus arcu felis bibendum ut tristique et. Mauris in aliquam sem fringilla ut morbi tincidunt augue.
        </p>
        <p>
          Sollicitudin nibh sit amet commodo nulla facilisi. Turpis egestas integer eget aliquet nibh praesent. Diam quam nulla porttitor massa id neque aliquam. Turpis tincidunt id aliquet risus feugiat in. In hac habitasse platea dictumst quisque sagittis purus sit. Risus nec feugiat in fermentum posuere urna nec tincidunt. Turpis in eu mi bibendum neque egestas congue. Tortor vitae purus faucibus ornare suspendisse sed nisi. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis vitae. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Porttitor leo a diam sollicitudin tempor. Leo vel fringilla est ullamcorper eget nulla. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Amet purus gravida quis blandit turpis. Pretium quam vulputate dignissim suspendisse in est ante in. Enim praesent elementum facilisis leo vel fringilla est. Praesent tristique magna sit amet purus gravida quis blandit. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
        </p>
        <p>
          Erat imperdiet sed euismod nisi. Tincidunt vitae semper quis lectus. Risus quis varius quam quisque id diam vel. Amet nisl suscipit adipiscing bibendum est ultricies integer. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Nascetur ridiculus mus mauris vitae. Proin nibh nisl condimentum id venenatis a. Morbi blandit cursus risus at ultrices. In dictum non consectetur a erat nam at lectus. Tempor nec feugiat nisl pretium fusce id velit. In metus vulputate eu scelerisque felis imperdiet proin. Adipiscing vitae proin sagittis nisl rhoncus mattis. Donec enim diam vulputate ut pharetra sit amet aliquam.
        </p>
      </div>
    );
  }
}

export default App;
