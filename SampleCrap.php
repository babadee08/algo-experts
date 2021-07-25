<?php

class SampleCrap
{
    public function getTemplate(
        Template $template,
        EntityManagerInterface $entityManager,
        TemplateFactory $templateFactory,
        SerializerInterface $serializer
    ): JsonResponse {
        // we may have to duplicate template here
        if ($this->duplicateTemplate($template)) {
            $templateJsonData = $template->getJson();
            $templateJsonData['name'] = $templateJsonData['name'].' copy';
            $template = $templateFactory->getInstance($templateJsonData, $this->getUser()->getCustomer());
            $entityManager->persist($template);
            $entityManager->flush();
        }
        $jsonTemplate = $serializer->serialize($template, 'json', [
            'ignored_attributes' => ['customer', 'contentPiece', 'accounts'],
        ]);

        return new JsonResponse(json_decode($jsonTemplate, true), Response::HTTP_OK);
    }

    
    private function duplicateTemplate(Template $template): bool
    {
        $customer = $this->getUser()->getCustomer();

        // template owner is admin
        if (null === $customer && ($this->getUser()->isAdmin() || null === $template->getCustomer())) {
            return false;
        }

        // admin template shared with customer
        if (null !== $customer && null === $template->getCustomer()) {
            return true;
        }

        // Customer template share with Child customers
        if (null !== $customer && $template->getCustomer()->getUuid() !== $customer->getUuid()) {
            return true;
        }

        // Template owner
        if (null !== $customer && $template->getCustomer()->getUuid() === $customer->getUuid()) {
            return false;
        }

        return false;
    }
}
