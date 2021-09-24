import styled from 'styled-components';

const QuizListContainer = styled.div`
  .quiz-list-table {
    tr {
      td {
        padding: 0;
        a {
          padding: 0.6875rem 0.75rem;
        }
        &.is-checkbox {
          a {
            padding: 0;
            .checkbox-component {
              padding: 0px 0.75rem 0.6875rem 1.25rem;
            }
          }
        }
      }
    }
  }
`;

export default QuizListContainer;
