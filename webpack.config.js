module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      PokemonApp: 'public/components/PokemonApp.jsx',
      FormAttacker: 'public/components/FormAttacker.jsx',
      FormDefender: 'public/components/FormDefender.jsx',
      SorterAttack: 'public/components/SorterAttack.jsx',
      DisplayPokemon: 'public/components/DisplayPokemon.jsx',
      ReferencePokemon: 'public/components/ReferencePokemon.jsx',
      ReferenceMoves: 'public/components/ReferenceMoves.jsx',
      PokemonField: 'public/components/PokemonField.jsx',
      SideAttack: 'public/components/SideAttack.jsx',
      SideDefense: 'public/components/SideDefense.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  node: {
      fs: "empty"
  },
};
