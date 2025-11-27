export default function Hobbies() {
return (
<section className="flex flex-col h-full animate-fadeIn">
    <h2 className="text-3xl font-bold">My Hobbies</h2>

    <div className="mt-2 flex-1 min-h-0">
    <div className="h-full overflow-y-auto pr-3">

        <p className="text-lg text-gray-200 leading-relaxed">
            Here's how TrackmanAI works
        </p>

        <pre className="bg-black/50 p-4 rounded-xl text-sm overflow-x-auto border border-white/20 my-4">
<code>
{`import numpy as np

def predict_action(state, model):
    state = np.array(state).reshape(1, -1)
    return model.predict(state)[0]
`}
</code>
</pre>

        <p>
            Ajouter react-syntax-highlighter
            + change tab name
        </p>

        </div>
    </div>
</section>
);
}