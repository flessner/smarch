## What?
During the [Sovereign Data Hackathon](https://blog.ceramic.network/sovereign-data-hackathon-kickoff/) I made it my mission to bring a CMS to the [Ceramic Network](https://ceramic.network/) and you are reading the product of this. Some bugs still need some ironing out, but the base is standing solid; working on the Clay Testnet.

## How can I use it?
Well... you shouldn't *for now*. This is because of a multitude of reasons; for once it is on the Clay Testnet, which is for *testing*. You also shouldn't use it because of its novelty, it just isn't as battletested as a commercial solution. But, if you can live with riding the bleeding edge why not give it a try! You can easily manage your Blogs from [Smarch Cloud](https://smarch.flessner.workers.dev/cloud)  and use it on your Website with the client-side library [smarch-js](https://github.com/flessner/smarch/tree/master/smarch-js), which will in the next couple of days become a NPM package. Trying out new things is always fun, which is why I coded this in the first place ;D

## What can be improved?
A lot of things, *actually*. The worst thing currently is without a doubt the Post data model, which is why I didn't commit it to to registry. It just doesn't allow for the features it should, namely having a header image associated with a post or having generally more options. On the other hand there are improvements to be made with Ceramic. Especially querying for attributes like family or the controller would have made this project way easier and simpler. Right now the architecture is similar to how the [DID Datastore](https://developers.ceramic.network/tools/glaze/did-datastore/) behaves, like an index. Posts right now aren't associated to a Blog, rather a Blog keeps the references to all Posts within it. This architecture leads to very easy desync between the Blog and its Posts.

## What's next?
A better data model - This can hopefully be discussed with the Ceramic Community so that everyone can chip in their ideas.

Ceramic Analytics - This is an idea I have had while developing the CMS, but is probably also better implemented with more advanced querying in Ceramic.
 
## Conclusion
Ceramic is awesome! I had a lot of fun writing this little side project and I will definitely keep up with Ceramic and encourage you to do the same.