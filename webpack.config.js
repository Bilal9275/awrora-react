module.exports = {
    module: {
      rules: [
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/pdf/', // specify the output directory for PDF files
              },
            },
          ],
        },
      ],
    },
  };
  
  