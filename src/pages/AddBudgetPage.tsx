import { Divider, Text } from "@mantine/core";
import AddToBudget from "../components/AddToBudget";
import SetBudget from "../components/SetBudget";
import PageContainer from "../layout/PageContainer";
import { useContext } from "react";
import ResetValueModal from "../components/ResetValueModal";
import CategoriesContext from "../store/CategoriesContext";

const AddBudgetPage = () => {
  const { getTotalAmount } = useContext(CategoriesContext);
  const budget = getTotalAmount("Budget");

  return (
    <PageContainer>
      <Text
        size="xl"
        weight={700}
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
        })}
      >
        Create Budget:
      </Text>
      <Text
        size="xs"
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[1]
              : theme.colors.gray[9],
        })}
      >
        Enter value to set budget.
      </Text>
      <SetBudget />
      <Divider mt={30} mb={20} />
      <Text
        size="xl"
        weight={700}
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
        })}
      >
        Add Revenue Source:
      </Text>
      <Text
        size="xs"
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[1]
              : theme.colors.gray[9],
        })}
      >
        Add income or increase budget.
      </Text>
      <AddToBudget />
      <Divider mt={30} mb={20} />
      <ResetValueModal prevAmount={budget} type="Budget" />
    </PageContainer>
  );
};

export default AddBudgetPage;
