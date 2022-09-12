import {
  Card,
  Page,
  Layout,
  Heading,
  FormLayout,
  TextField,
  Form,
  Select,
  ChoiceList
} from "@shopify/polaris";
import React from "react";
import {useState, useCallback} from 'react'
import SpecificProducts from "../components/SpecificProducts";
import '../styles/home.css'


export default function HomePage() {
  const [name, setName] = useState('')
  const [selectStatus, setSelectStatus] = useState('')
  const [selectApply, setSelectApply] = useState('')
  const [selectCustomPrice, setSelectCustomPrice] = useState('')

  console.log(selectCustomPrice)

  const handleNameChange = useCallback((value) => setName(value), []);

  const handleSelectChange = useCallback((value) => setSelectStatus(value), []);

  const handleSelectApplyChange = useCallback((value) => setSelectApply(value), []);

  const handleSelectCustomPrice = useCallback((value) => setSelectCustomPrice(value), []);

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Heading>NEW PRICING RULE</Heading>
          <Card sectioned title="General Information"> 
            <Form noValidate>
              <FormLayout>
                <TextField
                  value={name}
                  onChange={handleNameChange}
                  label="Name"
                  type="text"
                  autoComplete="off"
                />
                <TextField
                  value={name}
                  onChange={handleNameChange}
                  label="Priority"
                  type="number"
                  autoComplete="off"
                  helpText={
                    <span>
                      Please enter integer from 0 to 99, 0 is the hightest priority 
                    </span>
                  }
                />

                <Select
                  label="Status"
                  options={['Enable', 'Disable']}
                  onChange={handleSelectChange}
                  value={selectStatus}
                />
              </FormLayout>
            </Form>

          </Card>
          <Card sectioned title="Apply to Products"> 
            <ChoiceList
              choices={[
                {label: 'All products', value: 'hidden'},
                {label: 'Specific product', value: 'optional',
                renderChildren: () => (<SpecificProducts/>)
                },
                {label: 'Product collection', value: 'required',
                },
                {label: 'Product tag', value: '222', },
              ]}
              selected={selectApply}
              onChange={handleSelectApplyChange}
            />
          </Card>
          <Card sectioned title="Custom Price"> 
            <ChoiceList
              choices={[
                {label: 'Apply a price to selected products', value: 'onePrice'},
                {label: 'Decrease a fixed amount of the original prices of the select products', value: 'fixed',
                },
                {label: 'Decrease the original prices of the select product bu percentage % ', value: 'percent',
                }
              ]}
              selected={selectCustomPrice}
              onChange={handleSelectCustomPrice}
            />
                <TextField
                  suffix={selectCustomPrice == 'percent' && <div>%</div>}
                  value={name}
                  onChange={handleNameChange}
                  label="Amount"
                  type="number"
                  autoComplete="off"
                  prefix={!(selectCustomPrice == 'percent') && <div style={{  textDecoration: 'underline'}}>đ</div>}
                />
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card title="Tags" sectioned>
            <p>Add tags to your order.</p>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
