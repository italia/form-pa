import React from "react";
import { Document, Page, Text, BlobProvider } from "@react-pdf/renderer";

// Create Document Component
const PDFDocument = (props: any) => (
  <Document>
    <Page wrap>
      <Text style={{ padding: 40 }}>{props.value}</Text>
    </Page>
  </Document>
);

class App extends React.Component {
  state = { value: "Hey" };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <form>
          <input
            value={this.state.value}
            type="text"
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </form>

        <BlobProvider document={PDFDocument({ value: this.state.value })}>
          {({ url }) => (
            <iframe
              title={"pdf ex"}
              src={url as string}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </BlobProvider>
      </div>
    );
  }
}

export default App;
